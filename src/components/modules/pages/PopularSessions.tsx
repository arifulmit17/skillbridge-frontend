

import { bookingService } from '@/services/booking.service';
import { SessionCard2 } from '../Cards/SessionCard2';
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
export default async function  PopularSessions() {
    const sessionsData=await bookingService.getAllSessions();
          const sessions=await sessionsData.data.json();
          const pendingSessions = sessions?.filter(
  (session:Session) => session.status === "PENDING"
) ?? []
console.log(pendingSessions);


  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {pendingSessions.length === 0 ? <p>No sessions available.</p> : 
                    pendingSessions?.slice(0,3).map((session:Session)=>(<SessionCard2 key={session.id} session={session}></SessionCard2>))}
        </div>
  )
}
