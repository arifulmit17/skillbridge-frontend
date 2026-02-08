import { SessionCreatePage } from '@/components/modules/pages/SessionCreatePage';
import { availabilityService } from '@/services/availability.service';
import { categoriesService } from '@/services/categories.service';
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';
import React from 'react'
type User = {
  id: string
  name: string
  email: string
  image?: string
  role: string
  status: string
  emailVerified: boolean
  createdAt: string
}
export default async function CreateSessionPage() {
    const {data:user}=await userService.getSession()
        const  myId=user.session.userId;
        const {data:tutor}=await tutorService.getTutorByUserId(myId);
        const {data:category}=await categoriesService.getAllCategories();
        const {data:slot}=await availabilityService.getAllSlots();
            const categoryList=await category.json();
            const slotList=await slot.json()
            const studentid="uvDEjuFHNU2cW4EIw9hD9LAQNGkgVwqt";
            console.log(slotList);
  return (
    <div>
        <SessionCreatePage slots={slotList.data} tutorId={tutor?.id} studentId={studentid} categories={categoryList}></SessionCreatePage>
    </div>
  )
}
