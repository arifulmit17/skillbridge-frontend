import { SessionCard } from '@/components/modules/Cards/SessionCard';
import { bookingService } from '@/services/booking.service';
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
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
export default async function MySessions() {
     const {data:user}=await userService.getSession()
    const  myId=user.session.userId;
    const {data:tutor}=await tutorService.getTutorByUserId(myId);
    const authorId=tutor?.id;
    const sessionsData=await bookingService.getAllSessions();
    const sessions=await sessionsData.data.json();
    const mySessions=sessions.filter((session:Session)=>session.tutorId===authorId);
    console.log("My sessions:",mySessions);
  return (
    <div>
        {mySessions.length === 0 ? <p>No sessions available.</p> : 
        mySessions?.map((session:Session)=>(<SessionCard key={session.id} session={session}></SessionCard>))}
</div>)
}