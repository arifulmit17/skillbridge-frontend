import { SessionCard } from '@/components/modules/Cards/SessionCard'
import { bookingService } from '@/services/booking.service'
import { tutorService } from '@/services/tutor.service'
import React from 'react'

type User = {
  id: string
  name: string
  email: string
  image: string | null
  role: string
  status: string
  emailVerified: boolean
  createdAt: string
  updatedAt: string
}

type Tutor = {
  id: string
  userId: string
  subject: string
  price: string
  status: string
  isFeatured: boolean
  categoryId: string
  createdAt: string
  updatedAt: string
}

type Session = {
  id: string
  tutorId: string
  studentId: string
  categoryId: string
  availabilitySlotId?: string
  startTime: string // just time in HH:mm format
  endTime: string   // just time in HH:mm format
  status: "PENDING" | "COMPLETED" | "CANCELLED"
  createdAt: string
  updatedAt: string
  student: User
  tutor: Tutor
}


export default async function SessionPage() {

    const {data}=await bookingService.getAllSessions()
    const sessionData=await data.json()
    
  return (
    <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5'>
        {
sessionData?.map((session:Session) => (
  <SessionCard key={session.id} session={session} />
))
        }
       

    </div>
  )
}
