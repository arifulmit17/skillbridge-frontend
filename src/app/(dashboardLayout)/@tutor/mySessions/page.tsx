import { SessionCard } from '@/components/modules/Cards/SessionCard';
import { bookingService } from '@/services/booking.service';
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
import React from 'react'

export default async function MySessions() {
     const {data:user}=await userService.getSession()
    const  myId=user.session.userId;
    const {data:tutor}=await tutorService.getTutorByUserId({userId:myId!});
    const authorId=tutor?.id;
    const sessionsData=await bookingService.getAllSessions();
    const sessions=await sessionsData.data.json();
    const mySessions=sessions.filter((session:any)=>session.tutorId===authorId);
    console.log("My sessions:",mySessions);
  return (
    <div>
        {mySessions.length === 0 ? <p>No sessions available.</p> : 
        mySessions?.map((session:any)=>(<SessionCard key={session.id} session={session}></SessionCard>))}
</div>)
}