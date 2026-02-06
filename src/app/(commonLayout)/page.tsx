import FaqSection from "@/components/modules/homepage/FAQSection";
import FeaturedTutor from "@/components/modules/homepage/FeaturedTutor";
import { Hero } from "@/components/modules/homepage/Hero";
import PopularSessions from "@/components/modules/pages/PopularSessions";
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
      <section className="w-full flex flex-col justify-center items-center gap-10 mt-0 lg:mt-100">
            <div className="w-full text-5xl text-center"> 
               <h1 >Featured Tutors</h1>
            </div>
            
           <FeaturedTutor></FeaturedTutor>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-10 mt-5 lg:mt-10">
            <div className="w-full text-5xl text-center"> 
               <h1 >Popular Sessions</h1>
            </div>
            
           <PopularSessions></PopularSessions>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-10 mt-5 lg:mt-10">
            <div className="w-full text-5xl text-center"> 
               <h1 >Popular Categories</h1>
            </div>
            
           <FeaturedTutor></FeaturedTutor>
      </section>
      <section className="w-full flex flex-col justify-center items-center gap-10 mt-5 lg:mt-10">
            <div className="w-full text-5xl text-center"> 
               <h1 >F.A.Q</h1>
            </div>
            
          <FaqSection></FaqSection>
      </section>
     
    </div>
  );
}
