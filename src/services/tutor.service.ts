import { env } from "@/env";
const API_URL=env.API_URL


interface GetTutorParams {
  isFeatured?: boolean;
  search?: string;
}
export const tutorService={
    getTutor: async function(params?: GetTutorParams){
        try{
             const url = new URL(`${API_URL}/tutors`);
             console.log(url);

      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      
           

 const res=await fetch(`${url.toString()}`,{
  cache:'no-store'
 })
  
  
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