
import { ProfilepageTutor } from '@/components/modules/pages/ProfilepageTutor';
import TutorProfile from '@/components/modules/pages/TutorProfile';

import { categoriesService } from '@/services/categories.service';
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service'
import React from 'react'

export default   async function profile() {
    const {data:user}=await userService?.getSession()
    const  myId=user?.session?.userId;
    const {data:tutor}=await tutorService?.getTutorByUserId(myId);
    
    const {data:category}=await categoriesService?.getAllCategories();
    const categoryList=await category?.json();
    // console.log(categoryList);
  return (
    <div>
         {tutor ? <TutorProfile tutor={tutor}></TutorProfile>:
        <ProfilepageTutor userId={myId} categories={categoryList}></ProfilepageTutor>}
        
        
    </div>
  )
}
