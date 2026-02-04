import { bookingService } from '@/services/booking.service'
import { userService } from '@/services/user.service';
import React from 'react'

export default async function MyBookingPage() {
    const {data:user}=await userService.getSession()
    const  myId=user.session.userId;
    const {data}=await bookingService.getAllSessions()
    const booking=await data.json()
    console.log(booking,myId);
  return (
    <div>

    </div>
  )
}
