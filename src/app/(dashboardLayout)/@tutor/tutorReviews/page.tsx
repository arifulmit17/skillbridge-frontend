import ReviewPage from '@/components/modules/pages/Reviewpage';
import { reviewsService } from '@/services/reviews.service'
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
import { getSession } from 'better-auth/api'
import React from 'react'

export default async function TutorReviewsPage() {
    const {data:user}=await userService.getSession()
    const tutor=await tutorService.getTutorByUserId({userId:user.session.userId})
    
    const reviews=await reviewsService.getAllReviews()
    const data=await reviews.data.json();
    const filteredReviews=data.filter((review:any)=>review.tutorId===tutor.data.id)
    
  return (
    <div>
        {filteredReviews.map((review:any)=>(<ReviewPage key={review.id} review={review}></ReviewPage>))}
    </div>
  )
}
