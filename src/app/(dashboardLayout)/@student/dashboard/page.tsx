import { userService } from "@/services/user.service";

export default async function StudentDashboard() {
  const {data} = await userService.getSession()
  
  console.log(data);
  return (
    <div>
      <h1> Student Profile </h1>
    </div>
  );
}