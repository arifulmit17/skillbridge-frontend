import { Hero } from "@/components/modules/homepage/Hero";
import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";





export default async function Home() {
  // const {data}=await userService.getSession()
  const {data}=await tutorService.getTutor()
  console.log(data);
  // console.log("Home page session data:",data);
 
  return (
    <div className="min-h-screen">
      <section className="border border-black">
          <Hero></Hero>
      </section>
     
    </div>
  );
}
