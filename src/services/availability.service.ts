

import { env } from "process"

const API_URL=env.API_URL

export const availabilityService={
    getAllSlots: async function () {      
        const data=await fetch(`${API_URL}/slots/`,{
            cache:'no-store'
        })
       return {data:data,error:null}
    },


}