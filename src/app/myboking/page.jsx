import BookingInfo from '@/Components/MyBooking/BookingInfo'
import Link from 'next/link'
import React from 'react'

const page = () => {


  return (
    <div className='space-y-20 mb-10'>
      <section>
        <div className='text-center space-y-3'>
        <h2 className='text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold'>My Bookings</h2>
        <p>Track and manage all your care service reservations in one place</p>
        <Link href={'/service'} className='btn btn-secondary'>Book New Service</Link>
      </div>
      </section>

      <section>
        <BookingInfo/>
      </section>
    </div>
  )
}

export default page