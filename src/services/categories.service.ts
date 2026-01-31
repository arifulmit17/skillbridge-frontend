import { env } from "process"

const API_URL=env.API_URL



export const categoriesService = {
    
    getAllCategories: async function () {      
        const data=await fetch(`${API_URL}/categories/`,{
            cache:'no-store'
        })
       return {data:data,error:null}
    }
}