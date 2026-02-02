import { SessionCard } from '@/components/modules/pages/SessionCard';
import { bookingService } from '@/services/booking.service';
import React from 'react'

export default async function Allsessionpage() {
  const sessionsData=await bookingService.getAllSessions();
      const sessions=await sessionsData.data.json();

  return (
    <div>
        {sessions.length === 0 ? <p>No sessions available.</p> : 
                sessions?.map((session:any)=>(<SessionCard key={session.id} session={session}></SessionCard>))}
    </div>
  )
}
