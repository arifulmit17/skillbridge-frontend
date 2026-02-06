import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
import TutorProfile from '@/components/modules/pages/TutorProfile';
import React from 'react'


type Tutor = {
  id: string
  subject: string
  price: string
  isFeatured: boolean
  status: "ACTIVE" | "INACTIVE"
  createdAt?: string
  user: {
    name: string
    email: string
    image: string
    role: string
    status: string
  }
}
export default async function MyTutors() {
    const {data:user}=await userService.getSession()
        const  myId=user.session.userId;
        console.log(myId);
        const {data:tutor}=await tutorService.getTutorByUserId(myId);
        console.log(tutor);
  return (
    <div>
             {
                tutor?.map((tutor:Tutor)=><TutorProfile key={tutor.id} tutor={tutor}></TutorProfile>)
             } 
            
            
            
        </div>
  )
}
