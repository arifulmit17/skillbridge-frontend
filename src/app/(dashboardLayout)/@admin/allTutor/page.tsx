import TutorCard from '@/components/modules/homepage/TutorCard';
import { tutorService } from '@/services/tutor.service';
import React from 'react'

export  default async function AllTutorpage() {
    const {data}=await tutorService.getTutor();
     
  return (
    <div>
      {data?.map((tutor:any)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
    </div>
  )
}
