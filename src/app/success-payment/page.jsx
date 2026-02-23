'use client'
import axios from 'axios'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React, { useEffect } from 'react'

const PaymentSuccess = () => {

const serachparams = useSearchParams()

const sessionId = serachparams.get('session_id');

useEffect(() => {
  if (!sessionId) return;
  const updatePayment = async () => {
    const response = await axios.post(`/api/payment-success`,{sessionId})
  }

  updatePayment()
},[sessionId])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
  <div className="max-w-sm w-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
    
    {/* Success Icon */}
    <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
      </svg>
    </div>

    {/* Message */}
    <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
    <p className="text-gray-500 mb-8">Your transaction has been completed successfully.</p>

    {/* Action Button */}
    <Link href={'/'} className="w-full bg-primary hover:bg-secondary text-white font-semibold py-3 px-6 rounded-xl transition duration-200">
      Go Back Home
    </Link>

  </div>
</div>
  )
}

export default PaymentSuccess