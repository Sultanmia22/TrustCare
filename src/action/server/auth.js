'use server'
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const postUserData = async (data) => {
    try{
        const useerCollection = dbConnect('users');

        const hashPassword = await bcrypt.hash(data.password,10)

        const userInfo = {
            ...data,
            password: hashPassword,
            role : 'user'
        }

        const result = await useerCollection.insertOne(userInfo)

        return {insertedId:result.insertedId.toString()}
    }
    catch(er){
        console.log(er.message);
        return {message: 'Internal Server Error'}
    }
}


/* export const getUserData = async (email) => {
    try{
       
        const userCollection = dbConnect('users');

        const query = {email:}

        const result = await userCollection.findOne()

        return result

    }

    catch(er){
        console.log(er)
    }
} */