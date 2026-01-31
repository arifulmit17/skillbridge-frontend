import TutorProfilePage from '@/components/modules/pages/TutorProfile'
import { tutorService } from '@/services/tutor.service'
import React from 'react'

export default async function Tutorpage({ params }: { params: Promise<{ id: string }> }) {
    const {id}=await params
    const data=await tutorService.getTutorById(id)
    
  return (
    <div>
        <TutorProfilePage tutor={data.data}></TutorProfilePage>
    </div>
  )
}
