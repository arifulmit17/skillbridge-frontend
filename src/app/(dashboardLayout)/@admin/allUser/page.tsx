import { UserCard } from '@/components/modules/pages/UserCard';
import { userService2 } from '@/services/user2.service';

export default async function AllUser() {
  const data=await userService2.getAllUser()
  
  console.log(data);

  return (
    <div className='grid grid-cols-2 gap-5'>
       {data?.data.map(user => (
  <UserCard key={user.id} user={user} />
))}

    </div>
  )
}
