import { tutorService } from '@/services/tutor.service'
import React from 'react'
import TutorCard from '../Cards/TutorCard';


export default async function FeaturedTutor() {
  const data=await tutorService.getTutor({
      isFeatured: true,
    },)
  
  return (
    <div className='grid grid-cols-3 gap-5'>
        {data?.data?.map((tutor:any)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
    </div>
  )
}
