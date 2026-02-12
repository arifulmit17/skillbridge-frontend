import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import DeleteButton from "../shared/DeleteButton"
import CompleteButton from "../shared/CompleteButton"
import { userService } from "@/services/user.service"
import BookingButton from "../shared/BookingButton"

import { tutorService } from "@/services/tutor.service"
import ReviewInput from "../shared/ReviewInput"
import { availabilityService } from "@/services/availability.service"
import { Button } from "@/components/ui/button"
import CancelBooking from "../shared/CancelBooking"

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




export async function  SessionCard({ session }: { session: Session }) {
  // console?.log(session);
  const tutorId=session?.tutor?.userId
  const SessionStatus=session?.status
  
 
   const tutorData=await tutorService?.getTutorByUserId(tutorId)
   const tutorName=tutorData?.data?.user?.name
  const start = session?.startTime
  const end =session?.endTime
  const sessionStudentID=session?.studentId
      const { data} = await userService?.getSession();
       
    const role= data?.user?.role
    const userId=data?.user?.id
    const userName=data?.user?.name
    let booked=false
    
    
    // const {data?:teachingSession}=await bookingService?.getAllSessions()
    //  const teaching=await teachingSession?.json()
    if(userId==sessionStudentID){
       booked=true
    }
  // const durationHours =
  //   (end - start) / (1000 * 60 * 60)

  const statusColor = {
    PENDING: "bg-yellow-100 text-yellow-800",
    COMPLETED: "bg-green-100 text-green-800",
    CANCELLED: "bg-red-100 text-red-800",
  }[session?.status]

  return (
    <Card className="max-w-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Tutoring Session by {tutorName}</CardTitle>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
        >
          {session?.status}
        </span>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        <div>
          <p>Session date: Today</p>
        </div>
        <div>
          <p className="text-muted-foreground">Start</p>
          <p>{start?.toLocaleString()}</p>
        </div>
        
        <div>
          <p className="text-muted-foreground">End</p>
          <p>{end?.toLocaleString()}</p>
        </div>

        
         {userId==sessionStudentID && <h1>Session is Booked by {userName}</h1>}
        <div className="lg:flex flex-col gap-2 pt-3">
            {role=="admin" && <DeleteButton sessionId={session?.id}></DeleteButton>}
          {session?.status === "PENDING" && (
            <>
              <CancelBooking slotId={session?.availabilitySlotId} sessionId={session?.id} ></CancelBooking>
             {!booked && <BookingButton studentId={data?.user?.id} sessionId={session?.id} slotId={session?.availabilitySlotId}></BookingButton>} 
              
             {booked && <CompleteButton sessionId={session?.id}></CompleteButton>} 
            </>
          )}
          {session?.status==="COMPLETED" && <div>
            <h1>Give your review</h1>
            <ReviewInput tutorId={session?.tutorId} userId={data?.user?.id}></ReviewInput>
            </div>} 
        </div>
      </CardContent>
    </Card>
  )
}
