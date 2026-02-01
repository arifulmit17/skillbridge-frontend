"use client"
import { Button } from '@/components/ui/button'
import { bookingService } from '@/services/booking.service';
import React from 'react'

const handleDelete=async  (sessionId:string)=>{
  console.log("Deleting session with ID:", sessionId);
  // Implement deletion logic here
  const data =await bookingService.deleteSession(sessionId)
   if(data.data){
    console.log("session deleted successfully");
   }
    if(data.error){
      console.error("Failed to delete session:", data.error);
    }
}

export default function DeleteButton({ sessionId }: { sessionId: string }) {
  return (
    <div>
        <Button onClick={()=>handleDelete(sessionId)} size="sm" variant="outline">
                Cancel
              </Button>
    </div>
  )
}
