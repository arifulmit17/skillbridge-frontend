import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import BanButton from "../shared/BanButton"

type User = {
  id: string
  name: string
  email: string
  image?: string
  role: string
  status: string
  emailVerified: boolean
  createdAt: string
}

export function UserCard({ user }: { user: User }) {
  return (
    <Card className="max-w-md">
      <CardContent className="flex items-center gap-4 p-6">
        

        {/* User Info */}
        <div className="flex-1 space-y-1">
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm text-muted-foreground">{user.email}</p>

          <div className="flex flex-wrap gap-2 pt-1">
            <Badge variant="secondary">{user.role}</Badge>

            <Badge
              variant={user.status === "Unbanned" ? "default" : "destructive"}
            >
              {user.status}
            </Badge>
            <BanButton userId={user.id} ></BanButton>

            {user.emailVerified ? (
              <Badge variant="outline">Email Verified</Badge>
            ) : (
              <Badge variant="outline" className="text-yellow-600">
                Email Not Verified
              </Badge>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
