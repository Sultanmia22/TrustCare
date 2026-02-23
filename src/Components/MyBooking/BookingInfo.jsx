'use client'
import React, { useEffect, useState } from 'react'
import ViewDetailsButton from './ViewDetailsButton'
import CancelBooking from './CancelBooking'

import { useUser } from '@/hook/useUser'
import { getBookingInfo } from '@/action/server/booking'
import NoBooking from './NoBooking'
import axios from 'axios'


const BookingInfo = () => {

  const { email } = useUser()

  const [bookingData, setBookingData] = useState([])


  console.log(bookingData)

  console.log('user email:', email)

  useEffect(() => {
    if (!email) return

    const getBookingData = async () => {
      try {
        const res = await getBookingInfo(email)
        setBookingData(res)
      }
      catch (er) {

      }
    }

    getBookingData()
  }, [email])


  // Payment fucntion 
  const handleCheckout = async (data) => {
    try {
      const response = await axios.post(`/api/checkout`, {
        bookingId: data._id,
        serviceName: data.idname,
        price: data.totalPrice,
        email: email, // user emai
        image:data.serviceIamge
      })

      if (response.data.url) {
      window.location.href = response.data.url;
    }
    }
    catch (er) {
      console.log(er)
    }
  }




  if (bookingData.length == 0) {
    return <NoBooking />
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
              <th>Payment Status</th>
              <th>Payment</th>
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
                  <td>
                    {data.paymentStatus}
                  </td>
                  <td>
                    {
                      data.paymentStatus === 'unpaid' ? (
                        <button
                          onClick={() => handleCheckout(data)}
                          className='btn btn-sm bg-sky-400 text-gray-50'

                        >
                          Pay
                        </button>
                      )
                        :
                        <button className='btn btn-sm bg-green-400 text-gray-50'>Paid</button>
                    }
                  </td>
                  <td>{data.bookingStatus}</td>
                  <td>
                    <div className='flex  items-center gap-2'>
                      <ViewDetailsButton idname={data.idname} />
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