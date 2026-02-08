"use client"
import { Button } from "@/components/ui/button";
import { bookingService } from "@/services/booking.service";
import { UpdateSessionData } from "@/types/bookings.type";
import { toast } from "sonner";

type BookingButtonProps = {
  studentId: string
  sessionId: string
}
export default function BookingButton({studentId,
  sessionId,
}: BookingButtonProps) {

  const handleBooking= async(studentId:string,sessionId :string)=>{
      console.log("student id: ",studentId,"session id:",sessionId);
       
       const {res}= await bookingService.updateSession(sessionId,{studentId})
      if(res){
        toast.success("Session booked successfully")
      }
       
  }
  return (
    <div>
        <Button onClick={()=>handleBooking(studentId,sessionId)}> Book Session</Button>
    </div>
  )
}
