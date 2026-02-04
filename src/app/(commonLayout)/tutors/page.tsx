"use client"
import TutorCard from '@/components/modules/Cards/TutorCard';
import SearchFormCustom from '@/components/modules/shared/SearchFormCustom';

import { tutorService } from '@/services/tutor.service';
import React, { useState } from 'react'

export default function TutorPage() {
  
  const [tutors, setTutors] = useState<any[]>([])
  console.log(tutors);
  return (
    
         <div className='flex flex-col gap-10'>
            
          <div>
             <SearchFormCustom onResults={setTutors}></SearchFormCustom>
          </div>
          <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {tutors.map((tutor:any)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
        </div>

         </div>
        
      
  )
}
