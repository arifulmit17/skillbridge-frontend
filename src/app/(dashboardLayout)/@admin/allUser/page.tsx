import { UserCard } from '@/components/modules/Cards/UserCard';
import { userService2 } from '@/services/user2.service';


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
export default async function AllUser() {
  const data=await userService2.getAllUser()
  
  console.log(data);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
       {data?.data.map((user:User) => (
  <UserCard key={user.id} user={user} />
))}

    </div>
  )
}
