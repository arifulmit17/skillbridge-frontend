
import TutorCard from '@/components/modules/homepage/TutorCard';
import { tutorService } from '@/services/tutor.service';
import React from 'react'

export default async function TutorPage() {
  const data=await tutorService.getTutor()
      console.log(data);
  return (
    
    
        <div className='grid grid-cols-3 gap-5'>
            {data.data.map((tutor:any)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
        </div>
      
  )
}
