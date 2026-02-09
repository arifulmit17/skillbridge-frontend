"use client"
import { Button } from '@/components/ui/button'
import { bookingService } from '@/services/booking.service';
import React from 'react'
import { toast } from 'sonner';

const handleDelete=async  (sessionId:string)=>{
 toast(`Updating user with ID: ${sessionId}` );
  // Implement deletion logic here
  const data =await bookingService.deleteSession(sessionId)
   if(data.data){
    toast.success("session deleted successfully");
   }
    if(data.error){
      toast.error("Failed to delete session:", data.error);
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
