import ReviewPage from '@/components/modules/pages/Reviewpage';
import { reviewsService } from '@/services/reviews.service'
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
type Review = {
  id: string
  tutorId: string
  userId: string
  rating: string
  comment: string
  createdAt: string
}

export default async function TutorReviewsPage() {
    const {data:user}=await userService?.getSession()
    const tutor=await tutorService?.getTutorByUserId(user?.session?.userId)
    
    const reviews=await reviewsService?.getAllReviews()
    const data=await reviews?.data?.json();
    const filteredReviews=data?.filter((review:Review)=>review?.tutorId===tutor?.data?.id)
    
  return (
    <div>
  {Array.isArray(filteredReviews) && filteredReviews?.length > 0 ? (
    filteredReviews?.map((review: Review) => (
      <ReviewPage key={review?.id} review={review} />
    ))
  ) : (
    <div className="text-center py-10 text-muted-foreground">
      <p className="text-lg font-medium">No reviews yet</p>
      <p className="text-sm">
        This tutor hasn’t received any reviews so far.
      </p>
    </div>
  )}
</div>

  )
}
