import { Hero } from "@/components/modules/homepage/Hero";
import { userService } from "@/services/user.service";





export default async function Home() {
  const {data}=await userService.getSession()
  // console.log("Home page session data:",data);
 
  return (
    <div className="min-h-screen">
      <section className="border border-black">
          <Hero></Hero>
      </section>
     
    </div>
  );
}
