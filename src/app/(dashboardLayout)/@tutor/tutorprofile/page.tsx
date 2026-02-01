import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProfilepageTutor from '@/components/modules/pages/ProfilepageTutor';
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
    <div>profile page
        <Select>
  <SelectTrigger className="w-50">
    <SelectValue placeholder="Category" />
  </SelectTrigger>
  <SelectContent>
    {categoryList.map((cat: any) => (
    <SelectItem key={cat.id} value={cat.id}>{cat.name}</SelectItem>
    ))}
  </SelectContent>
</Select>
        
    </div>
  )
}
