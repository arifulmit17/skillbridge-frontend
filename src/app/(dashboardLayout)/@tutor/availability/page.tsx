import CreateSlotButton from '@/components/modules/shared/createSlotButton';
import { availabilityService } from '@/services/availability.service'
import { tutorService } from '@/services/tutor.service';
import { userService } from '@/services/user.service';


type AvailabilitySlot = {
  id: string
  tutorId: string
  dayOfWeek: string
  isAvailable: boolean
  createdAt: string
}


export default async function Availability() {
  const { data } = await availabilityService?.getAllSlots()
  const slotdata = await data?.json()
  const { data: user } = await userService?.getSession()
  const myId = user?.session?.userId
  const {data:tutor}=await tutorService?.getTutorByUserId(myId);

  
const mySlots=slotdata?.data?.filter((slot: AvailabilitySlot)=>slot?.tutorId===tutor?.id);
  return (
    <div className="w-11/12 mx-auto flex flex-col gap-6">
      
      {/* Create slot */}
      <CreateSlotButton tutorId={tutor?.id} />

      {/* Slots list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mySlots?.length > 0 ? (
          mySlots?.map((slot: AvailabilitySlot) => (
            <div
              key={slot?.id}
              className="border rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-semibold">{slot?.dayOfWeek}</p>
                <p className="text-sm text-muted-foreground">
                  Status: {slot?.isAvailable ? "Available" : "Unavailable"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted-foreground">
            No availability slots added yet.
          </p>
        )}
      </div>

    </div>
  )
}

