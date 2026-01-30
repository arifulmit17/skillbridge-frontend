import { env } from "@/env";
const API_URL=env.API_URL
export const tutorService={
    getTutor: async function(){
        try{
           

 const res=await fetch(`${API_URL}/api/tutors`)
  
  
 const data=await res.json()
//  console.log("Home page session:",session);
 return {data:data,error:null}
        }
    catch(err){
        console.log(err);
        return {data:null,error:{message:"Failed to fetch tutor data"}}
    }
}
}