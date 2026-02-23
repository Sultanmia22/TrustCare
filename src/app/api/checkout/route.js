import { NextResponse } from 'next/server'

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(req) {
    try {
        const { bookingId, serviceName, price, email, image } = await req.json()

        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: serviceName,
                            images: image ? [image] : [],
                        },

                        unit_amount: Math.round(price * 100),
                    },

                    quantity: 1
                }
            ],
            mode: 'payment',
            metadata: {
                bookingId: bookingId,
                userEmail: email,
                serviceName: serviceName,
                serviceImage:image
            },
            success_url: `${req.headers.get('origin')}/success-payment?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${req.headers.get('origin')}/bookings`,
        });

        return NextResponse.json({ url: session.url });
    }
    catch (err) {

    }
}