"use client"
import { Button } from '@/components/ui/button'
import { bookingService } from '@/services/booking.service';
import React from 'react'

const handleComplete=async (sessionId:string,status: "COMPLETED")=>{
     console.log("Updating session with ID:", sessionId);
      // Implement deletion logic here
      const data =await bookingService.updateSession(sessionId,{ status })
       if(data.data){
        console.log("session updated successfully");
       }
        if(data.error){
          console.error("Failed to update session:", data.error);
        }
}

export default function CompleteButton({ sessionId }: { sessionId: string }) {
  return (
    <div>
        <Button onClick={() => handleComplete(sessionId, "COMPLETED")} size="sm">
                Mark Complete
              </Button>
    </div>
  )
}
