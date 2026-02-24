import PaymentSuccess from '@/Components/paymentSuccess/PaymentSuccess'
import React, { Suspense } from 'react'

const SuccessPayment = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PaymentSuccess/>
    </Suspense>
  )
}

export default SuccessPayment