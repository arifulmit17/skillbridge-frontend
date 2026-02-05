import { SessionCard } from '@/components/modules/Cards/SessionCard';
import { bookingService } from '@/services/booking.service';
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

export default async function Allsessionpage() {
  const sessionsData=await bookingService.getAllSessions();
      const sessions=await sessionsData.data.json();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {sessions.length === 0 ? <p>No sessions available.</p> : 
                sessions?.map((session:Session)=>(<SessionCard key={session.id} session={session}></SessionCard>))}
    </div>
  )
}
