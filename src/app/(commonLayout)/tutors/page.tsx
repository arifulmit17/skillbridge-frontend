"use client"
import TutorCard from '@/components/modules/Cards/TutorCard';
import SearchFormCustom from '@/components/modules/shared/SearchFormCustom';


import React, { useState } from 'react'
type Tutor = {
  id: string
  subject: string
  price: string
  isFeatured: boolean
  status: "ACTIVE" | "INACTIVE"
  user: {
    name: string
    email: string
    image: string
  }
  category: {
    name: string
  }
  reviews: {
    rating: number
    comment: string
  }[]
}

export default function TutorPage() {
  
  const [tutors, setTutors] = useState<Tutor[]>([])
  console.log(tutors);
  return (
    
         <div className='flex flex-col gap-10'>
            
          <div>
             <SearchFormCustom onResults={setTutors}></SearchFormCustom>
          </div>
          <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {tutors.map((tutor:Tutor)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
        </div>

         </div>
        
      
  )
}
