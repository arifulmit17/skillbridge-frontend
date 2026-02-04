import { SessionCard } from '@/components/modules/Cards/SessionCard';
import { bookingService } from '@/services/booking.service'
import { userService } from '@/services/user.service';
import React from 'react'

export default async function MyBookingPage() {
    const {data:user}=await userService.getSession()
    const  myId=user.session.userId;
    const {data}=await bookingService.getAllSessions()
    const booking=await data.json()
    
    const myBookings = booking.filter(b => b.studentId === myId);
    
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {
    myBookings.map((session) => (
      <SessionCard key={session.id} session={session} />
    ))
            }
           
    
        </div>
  )
}
