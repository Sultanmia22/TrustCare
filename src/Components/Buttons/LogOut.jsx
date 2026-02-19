'use client'
import React from 'react'
import { signOut } from "next-auth/react"

const LogOut = () => {
    const handleLogout = async () => {
        await signOut({ 
            callbackUrl: "/",
            redirect: true 
        })
    }

    return (
        <button onClick={handleLogout} className='w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors'>
            Logout
        </button>
    )
}

export default LogOut