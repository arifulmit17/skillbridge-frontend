"use client"
import TutorCard from '@/components/modules/Cards/TutorCard';
import GetAllTutor from '@/components/modules/shared/GetAllTutor';
import SearchFormCustom from '@/components/modules/shared/SearchFormCustom';
import { tutorService } from '@/services/tutor.service';


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
  
  // console.log(tutors);
  return (
    
         <div className='flex flex-col gap-10'>
            
          <div>
             <SearchFormCustom onResults={setTutors}></SearchFormCustom>
          </div>
         <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
  {tutors && tutors?.length > 0 ? (
    tutors?.map((tutor: Tutor) => (
      <TutorCard key={tutor?.id} tutor={tutor} />
    ))
  ) : (
    <div className="col-span-full text-center py-10 text-muted-foreground">
      <p className="text-lg font-medium">No tutors available</p>
      <p className="text-sm">Please adjust your search or check back later.</p>
    </div>
  )}
</div>


         </div>
        
      
  )
}
