'use server'

import { dbConnect } from "@/lib/dbConnect"

export  const getSerive = async (id) => {
    try{
        const serviceCollection = dbConnect('service')

        const query = {idname:id}

        const result = await serviceCollection.findOne(query)

        return result;
    }
    catch(er){
        console.log(er)
    }
}