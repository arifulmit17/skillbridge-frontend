import FeaturedTutor from "@/components/modules/homepage/FeaturedTutor";
import { Hero } from "@/components/modules/homepage/Hero";
import { tutorService } from "@/services/tutor.service";
import { userService } from "@/services/user.service";





export default async function Home() {
  // const {data}=await userService.getSession()
  
  // console.log("Home page session data:",data);
 
  return (
    <div className="min-h-screen">
      <section className="border border-black">
          <Hero></Hero>
      </section>
      <section>
           <FeaturedTutor></FeaturedTutor>
      </section>
     
    </div>
  );
}
