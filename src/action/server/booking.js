"use server"

import { dbConnect } from "@/lib/dbConnect"

export const getBookingInfo = async (email) => {
    try {
        if (!email) {
            throw new Error('Email is required')
        }

        console.log(email)
        const bookingCollection =  dbConnect('bookingInfo') 
        
        const query = { 'userInfo.userEmail': email }
        
        const result = await bookingCollection.find(query).toArray()
        
        return result
        
    } catch (er) {
        console.log("Booking fetch error:", er.message)
       
    }
}