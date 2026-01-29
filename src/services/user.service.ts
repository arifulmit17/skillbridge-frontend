import { cookies } from "next/headers";

export const userService={
    getSession: async function(){
        try{
            const cookieStore=await cookies()

 const res=await fetch('http://localhost:3000/api/auth/get-session',{
  headers:{
    cookie:cookieStore.toString()
  },
  cache:'no-store'
 })
 const session=await res.json()
 console.log("Home page session:",session);
 return session
        }
    catch(err){
        console.log("Error fetching session:",err);
        return null
    }
}
}