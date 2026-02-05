import { SessionCard } from '@/components/modules/Cards/SessionCard'
import { bookingService } from '@/services/booking.service'
import { tutorService } from '@/services/tutor.service'
import React from 'react'

type Session = {
  id: string
  tutorId: string
  studentId: string
  categoryId: string
  startTime: string
  endTime: string
  status: "PENDING" | "COMPLETED" | "CANCELLED"
  createdAt: string
}

export default async function SessionPage() {

    const {data}=await bookingService.getAllSessions()
    const sessionData=await data.json()
    
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
sessionData.map((session:Session) => (
  <SessionCard key={session.id} session={session} />
))
        }
       

    </div>
  )
}
