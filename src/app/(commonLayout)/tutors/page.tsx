
import TutorCard from '@/components/modules/homepage/TutorCard';
import { SearchForm } from '@/components/search-form';
import { tutorService } from '@/services/tutor.service';
import React from 'react'

export default async function TutorPage() {
  const data=await tutorService.getTutor()
      console.log(data);
  return (
    
         <div className='flex flex-col gap-10'>
            
          <div>
             <SearchForm></SearchForm>
          </div>
          <div className='w-11/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
            {data.data.map((tutor:any)=><TutorCard key={tutor.id} tutor={tutor}></TutorCard>)}
        </div>

         </div>
        
      
  )
}
