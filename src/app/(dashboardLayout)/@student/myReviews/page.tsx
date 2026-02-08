export const dynamic = "force-dynamic"
import ReviewCard from '@/components/modules/Cards/ReviewCard';
import { SessionCard } from '@/components/modules/Cards/SessionCard';
import { bookingService } from '@/services/booking.service';
import { reviewsService } from '@/services/reviews.service';
import { userService } from '@/services/user.service';
import React from 'react'
type Review = {
  id: string
  tutorId: string
  userId: string
  rating: string
  comment: string
  createdAt: string
}
export default async function page() {
     const {data:user}=await userService.getSession()
            const  myId=user.session.userId;
            console.log(myId);
            const {data:review}=await reviewsService.getAllReviews();
            const userReview=await review.json()
            const myReviews=userReview.filter((b:Review) => b.userId === myId);
            
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      {
        !myReviews ? <h1>No review available , Please book a review</h1>: myReviews.map((review:Review )=><ReviewCard  key={review.id} review={review}></ReviewCard>) 
      }
    </div>
  )
}
