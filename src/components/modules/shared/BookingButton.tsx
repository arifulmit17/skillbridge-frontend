import { Button } from "@/components/ui/button";


export default function BookingButton(userId:string, bookingId) {

    
  return (
    <div>
        <Button onClick={()=>handleBooking()}> Book Session</Button>
    </div>
  )
}
