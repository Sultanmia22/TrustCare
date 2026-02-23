import { dbConnect } from '@/lib/dbConnect';
import { ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
export async function POST(req) {
    try{
        const bookingCollection = dbConnect('bookingInfo')
        const { sessionId } = await req.json();
        const session = await stripe.checkout.sessions.retrieve(sessionId);
        
        const bookingId = session.metadata.bookingId

        const query = {_id: new ObjectId(bookingId)}

        const updateBookingInfo = {
            $set:{
                paymentStatus: 'paid',
                bookingStatus: 'confirmed'
            }
        }

        const result = await bookingCollection.updateOne(query,updateBookingInfo)

        return NextResponse.json({ success: true, session });
    }
    catch(er){
        console.log(er)
    }
}