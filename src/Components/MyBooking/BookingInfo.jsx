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
  const [loading, setLoading] = useState(false)
  const [checkoutLoading, setCheckoutLoading] = useState(null) // for specific booking


  console.log(bookingData)

  console.log('user email:', email)

  useEffect(() => {
    if (!email) return

    const getBookingData = async () => {
      setLoading(true);
      try {
        const res = await getBookingInfo(email)
        setBookingData(res)
      }
      catch (er) {

      } finally {
        setLoading(false);
      }
    }

    getBookingData()
  }, [email])


  // Payment fucntion 
  const handleCheckout = async (data) => {
    setCheckoutLoading(data._id);
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
    } finally {
      setCheckoutLoading(null);
    }
  }




  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[200px]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
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
                          disabled={checkoutLoading === data._id}
                        >
                          {checkoutLoading === data._id ? <span className="loading loading-spinner loading-sm"></span> : 'Pay'}
                        </button>
                      )
                        :
                        <button className='btn btn-sm bg-green-400 text-gray-50'>Paid</button>
                    }
                  </td>
                  <td className={`${data?.bookingStatus == 'pending' ? 'text-red-300' : 'text-green-400'}`}>{data.bookingStatus}</td>
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