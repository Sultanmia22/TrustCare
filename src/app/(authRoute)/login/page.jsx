import LoginForm from '@/Components/LoginForm/LoginForm'
import React, { Suspense } from 'react'

const Login = () => {
  return (
     <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    }>
      <LoginForm/>
    </Suspense>
  )
}

export default Login