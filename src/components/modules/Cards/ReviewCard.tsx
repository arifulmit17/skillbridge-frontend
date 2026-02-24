import { tutorService } from "@/services/tutor.service"
import { userService2 } from "@/services/user2.service"
import React from "react"

type Review = {
  id: string
  tutorId: string
  userId: string
  rating: string
  comment: string
  createdAt: string
}

export default async function ReviewCard({ review }: { review: Review }) {
  const {data:tutor}=await tutorService.getTutorById(review.tutorId);
  const TutorName=tutor?.user.name
   const {data:student}=await userService2.getAllUser()
    const studentInfo=student.filter(user=>user.id==review.userId)
  return (
    <div className="max-w-md rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">

  {/* Header */}
  <div className="px-5 py-4 border-b space-y-1">
    <h2 className="text-base font-semibold text-gray-900">
      Review for {TutorName}
    </h2>
    <p className="text-sm text-gray-500">
      By {studentInfo[0].name}
    </p>
  </div>

  {/* Body */}
  <div className="px-5 py-4 space-y-4">

    {/* Rating */}
    <div className="flex items-center gap-3">
      <div className="text-lg tracking-wide">
        {"★".repeat(Number(review?.rating))}
        {"☆".repeat(5 - Number(review?.rating))}
      </div>
      <span className="text-sm text-gray-500">
        {review?.rating}/5
      </span>
    </div>

    {/* Comment */}
    <p className="text-gray-700 leading-relaxed text-sm">
      {review?.comment}
    </p>

  </div>

  {/* Footer */}
  <div className="px-5 py-3 border-t text-xs text-gray-400 flex justify-between">
    <span>
      {new Date(review?.createdAt).toLocaleDateString()}
    </span>
  </div>

</div>

  )
}
