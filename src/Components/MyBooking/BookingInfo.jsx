'use client'
import React, { useEffect, useState } from 'react'
import ViewDetailsButton from './ViewDetailsButton'
import CancelBooking from './CancelBooking'

import { useUser } from '@/hook/useUser'
import { getBookingInfo } from '@/action/server/booking'
import NoBooking from './NoBooking'


const BookingInfo =  () => {

  const { email } = useUser()

  const [bookingData,setBookingData] = useState([])

  console.log('user email:', email)

  useEffect(() => {
    if (!email) return

    const getBookingData = async () => {
      try{
        const res = await getBookingInfo(email)
        setBookingData(res)
      }
      catch(er){

      }
    }

    getBookingData()
  },[email])

 /*  // bookingData is an array; access fields from each item when mapping
  console.log('first idname:', bookingData[0]?.idname) */

if(bookingData.length == 0){
  return <NoBooking/>
}
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra bg-primary/5">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Service Name</th>
        <th>Duration</th>
        <th>Location</th>
        <th>Total Cost</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        bookingData.map((data, index) => (
          <tr key={data._id || index}>
            <th>{index + 1}</th>
            <td>{data.idname}</td>
            <td>{data.totalduration}</td>
            <td>{data.city}</td>
            <td>{data.totalPrice}</td>
            <td>{data.bookingStatus}</td>
            <td>
              <div className='flex  items-center gap-2'>
                <ViewDetailsButton />
                <CancelBooking />
              </div>
            </td>
          </tr>
        ))
      }
    </tbody>
  </table>
</div>
    </div>
  )
}

export default BookingInfo