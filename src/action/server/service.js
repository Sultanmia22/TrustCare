'use server'

import { dbConnect } from "@/lib/dbConnect"

export const getSerive = async (id) => {
    try {
        const serviceCollection = dbConnect('service')

        const query = { idname: id }

        const result = await serviceCollection.findOne(query)

        return result
    }
    catch (er) {
        console.log(er)
    }
}

// Store service data in database 
export const storeServiceData = async (formData) => {
    try {
        const { idname, durationType, totalduration, } = formData

        const durationValue = Number(totalduration)



        let basePrice = 0

        let totalPrice = 0

        if (idname === 'baby-care') basePrice = 350;
        else if (idname === 'elderly-care') basePrice = 400;
        else if (idname === 'sick-care') basePrice = 500;

        if (durationType === 'hours') {
            totalPrice += durationValue * basePrice
        }

        else if (durationType === 'days') {
            const totalDurationInDay = durationValue * 12

            totalPrice += totalDurationInDay * basePrice
        }

        const bookingInfo = {
            ...formData,
            basePrice,
            totalPrice,
            bookingTime: new Date().toISOString(),
        }

        const bookinkgCollection = dbConnect('bookingInfo')

        const result = await bookinkgCollection.insertOne(bookingInfo)

        return {
            success: true,
            insertedId: result.insertedId.toString(),
            message: "Booking successful!"
        };
    }

    catch (er) {
        console.log(er.message)
    }
}