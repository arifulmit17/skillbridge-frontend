import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import DeleteButton from "../shared/DeleteButton"
import CompleteButton from "../shared/CompleteButton"

type Session = {
  id: string
  tutorId: string
  studentId: string
  categoryId: string
  startTime: string
  endTime: string
  status: "PENDING" | "COMPLETED" | "CANCELLED"
  createdAt: string
}



export function SessionCard({ session }: { session: Session }) {
  const start = new Date(session.startTime)
  const end = new Date(session.endTime)

  const durationHours =
    (end.getTime() - start.getTime()) / (1000 * 60 * 60)

  const statusColor = {
    PENDING: "bg-yellow-100 text-yellow-800",
    COMPLETED: "bg-green-100 text-green-800",
    CANCELLED: "bg-red-100 text-red-800",
  }[session.status]

  return (
    <Card className="max-w-md">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg">Tutoring Session</CardTitle>

        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
        >
          {session.status}
        </span>
      </CardHeader>

      <CardContent className="space-y-3 text-sm">
        <div>
          <p className="text-muted-foreground">Start</p>
          <p>{start.toLocaleString()}</p>
        </div>

        <div>
          <p className="text-muted-foreground">End</p>
          <p>{end.toLocaleString()}</p>
        </div>

        <div>
          <p className="text-muted-foreground">Duration</p>
          <p>{durationHours.toFixed(1)} hours</p>
        </div>

        <div className="flex gap-2 pt-3">
          {session.status === "PENDING" && (
            <>
              <DeleteButton sessionId={session.id}></DeleteButton>
              <CompleteButton sessionId={session.id}></CompleteButton>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
