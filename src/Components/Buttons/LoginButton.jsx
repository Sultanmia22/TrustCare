'use client'
import React from 'react'
const LoginButton = ({ loading = false }) => {
  return (
    <button
           
            type="submit"
            className="btn btn-primary w-full text-white"
            disabled={loading}
          >
            {loading ? <span className="loading loading-spinner loading-sm"></span> : 'Login'}
          </button>
  )
}

export default LoginButton