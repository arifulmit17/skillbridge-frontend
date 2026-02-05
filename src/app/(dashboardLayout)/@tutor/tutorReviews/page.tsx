import ReviewPage from '@/components/modules/pages/Reviewpage';
import { reviewsService } from '@/services/reviews.service'
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
import { getSession } from 'better-auth/api'
import React from 'react'
type Review = {
  id: string
  tutorId: string
  userId: string
  rating: string
  comment: string
  createdAt: string
}

export default async function TutorReviewsPage() {
    const {data:user}=await userService.getSession()
    const tutor=await tutorService.getTutorByUserId(user.session.userId)
    
    const reviews=await reviewsService.getAllReviews()
    const data=await reviews.data.json();
    const filteredReviews=data.filter((review:Review)=>review.tutorId===tutor.data?.id)
    
  return (
    <div>
         {filteredReviews.length === 0 ? <p>No reviews available for this tutor.</p> : 
        filteredReviews?.map((review:Review)=>(<ReviewPage key={review.id} review={review}></ReviewPage>))}
    </div>
  )
}
