import { categoriesService } from '@/services/categories.service';
import { userService } from '@/services/user.service'
import React from 'react'

export default async function profile() {
    const {data:user}=await userService.getSession()
    const  myId=user.session.userId;
    const {data:category}=await categoriesService.getAllCategories();
    const categoryList=await category.json();
    console.log(categoryList);
  return (
    <div>profile page</div>
  )
}
