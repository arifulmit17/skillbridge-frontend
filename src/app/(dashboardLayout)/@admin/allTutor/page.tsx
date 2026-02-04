import TutorCard from '@/components/modules/Cards/TutorCard';
import { tutorService } from '@/services/tutor.service';
import React from 'react'

export  default async function AllTutorpage() {
    const {data}=await tutorService.getTutor();
     
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      {data?.map((tutor:any)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
    </div>
  )
}
