import React from "react"

type Review = {
  id: string
  tutorId: string
  userId: string
  rating: string
  comment: string
  createdAt: string
}

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm space-y-3">
      
      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-yellow-500 text-lg">
          {"★".repeat(Number(review.rating))}
          {"☆".repeat(5 - Number(review.rating))}
        </span>
        <span className="text-sm text-gray-500">
          {review.rating}/5
        </span>
      </div>

      {/* Comment */}
      <p className="text-gray-700 leading-relaxed">
        {review.comment}
      </p>

      {/* Footer */}
      <div className="flex justify-between text-xs text-gray-400">
        <span>
          {new Date(review.createdAt).toLocaleDateString()}
        </span>
      </div>

    </div>
  )
}
