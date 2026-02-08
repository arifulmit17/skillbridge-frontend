export const dynamic = "force-dynamic"
import Image from "next/image"
import { userService } from "@/services/user.service";
import UpdateUserProfile from "@/components/modules/shared/UpdateUserProfile";
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



export default async function ProfilePage() {
  const {data} = await userService.getSession()
  const user=data.user
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow p-8">
        {/* Header */}
        <div className="flex items-center gap-6 border-b pb-6">
          <div className="relative h-24 w-24 rounded-full overflow-hidden bg-gray-200">
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full flex items-center justify-center text-3xl font-semibold text-gray-600">
                {user.name}
              </div>
            )}
          </div>

          <div>
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <p className="text-gray-500">{user.email}</p>

            <div className="mt-2 flex gap-2">
              <span className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700">
                {user.role}
              </span>
              <span
                className={`px-3 py-1 text-sm rounded-full ${
                  user.status === "ACTIVE"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>
        </div>

        {/* Details */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Info label="User ID" value={user.id} />
          <Info
            label="Email Verified"
            value={user.emailVerified ? "Yes" : "No"}
          />
          <Info
            label="Joined"
            value={new Date(user.createdAt).toLocaleDateString()}
          />
        </div>
        <div className="my-10">If you want to update, then</div>
        <UpdateUserProfile userId={user.id}></UpdateUserProfile>
      </div>
    </div>
  )
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="font-medium text-gray-900 break-all">{value}</p>
    </div>
  )
}






