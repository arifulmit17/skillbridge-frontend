import Image from "next/image"
import Link from "next/link"

type Tutor = {
  id: string
  subject: string
  price: string
  isFeatured: boolean
  status: "ACTIVE" | "INACTIVE"
  user: {
    name: string
    email: string
    image: string
  }
  category: {
    name: string
  }
  reviews: {
    rating: number
    comment: string
  }[]
}

export default function TutorCard({ tutor }: { tutor: Tutor }) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      {/* Header */}
      <div className="flex items-center gap-4">
        

        <div className="flex-1">
          <h3 className="text-lg font-semibold capitalize">
            {tutor.user?.name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {tutor.subject} · {tutor.category.name}
          </p>
        </div>

        {tutor.isFeatured && (
          <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-700">
            ⭐ Featured
          </span>
        )}
      </div>

      {/* Body */}
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Hourly Rate</p>
          <p className="text-xl font-bold">${tutor.price}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            tutor.status === "ACTIVE"
              ? "bg-green-100 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {tutor.status}
        </span>
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
        <span>{tutor.reviews.length} reviews</span>
        <Link href={`/tutors/${tutor.id}`} className="rounded-lg bg-primary px-4 py-2 text-white hover:bg-primary/90 transition">
          View Profile
        </Link>
      </div>
    </div>
  )
}
