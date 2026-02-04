import { bookingService } from '@/services/booking.service'
import { tutorService } from '@/services/tutor.service'
import React from 'react'

export default async function SessionPage() {

    const {data}=await bookingService.getAllSessions()
    const sessionData=await data.json()
    const tutorId=sessionData[0].tutor.userId
   const tutorData=await tutorService.getTutorByUserId(tutorId)
   const tutorName=tutorData.data.user.name
   console.log(tutorName);
  return (
    <div>
       
    </div>
  )
}
