'use client'
import { useSession, signOut } from 'next-auth/react'
import React from 'react'
import { FaUser, FaEnvelope, FaShieldAlt, FaSignOutAlt, FaEdit } from 'react-icons/fa'
import Link from 'next/link'

const ProfileHero = () => {

  const { data: session, status } = useSession()

  if (status === 'loading') {
    return (
      <div className='flex justify-center items-center h-screen'>
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!session) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <div className='text-center'>
          <p className='text-gray-600 mb-4'>Please log in to view your profile</p>
          <Link href='/login' className='btn btn-primary'>Login</Link>
        </div>
      </div>
    )
  }

  return (
    <div 
      style={{
        background: 'radial-gradient(circle at 20% 50%, rgba(219, 234, 254, 0.8) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(196, 181, 253, 0.6) 0%, transparent 50%), radial-gradient(circle at 50% 100%, rgba(167, 243, 208, 0.5) 0%, transparent 50%)',
        backgroundColor: '#f9fafb'
      }}
      className='min-h-screen py-8 px-4'
    >
      <div className='max-w-4xl mx-auto'>
        
        {/* Profile Card - Simple Layout */}
        <div className='bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 mb-8'>
          
          {/* Header Gradient */}
          <div className='h-24 bg-gradient-to-r from-primary via-blue-500 to-secondary rounded-2xl mb-8 overflow-hidden'>
            <div className='absolute inset-0 opacity-10 bg-pattern'></div>
          </div>

          {/* Profile Image */}
          <div className='flex justify-center -mt-16 mb-6'>
            <div className='relative z-10'>
              <img 
                src={session?.user?.image} 
                alt={session?.user?.name}
                className='w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg'
              />
              <div className='absolute bottom-2 right-2 bg-green-500 w-6 h-6 rounded-full border-2 border-white'></div>
            </div>
          </div>

          {/* Name & Email */}
          <div className='text-center mb-6'>
            <h2 className='text-3xl font-black text-gray-900 mb-1'>{session?.user?.name}</h2>
            <p className='text-gray-500 text-sm flex items-center justify-center gap-1'>
              <FaEnvelope size={14} /> {session?.user?.email}
            </p>
          </div>

          {/* Status Badge */}
          <div className='flex justify-center mb-8'>
            <span className='badge badge-primary badge-lg px-4 py-3 text-white'>
              <FaShieldAlt className='mr-2' /> Active User
            </span>
          </div>

          {/* Action Buttons */}
          <div className='flex flex-col sm:flex-row gap-3 justify-center mb-8'>
            <button className='btn btn-outline btn-sm rounded-xl'>
              <FaEdit /> Edit Profile
            </button>
            <button 
              onClick={() => signOut()}
              className='btn btn-outline btn-sm btn-error rounded-xl'
            >
              <FaSignOutAlt /> Logout
            </button>
          </div>

          {/* Info Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 border-t pt-8'>
            {/* Full Name */}
            <div className='bg-gradient-to-br from-blue-50 to-transparent p-4 rounded-xl border border-blue-100'>
              <label className='block text-sm font-semibold text-gray-600 mb-2'>Full Name</label>
              <p className='text-lg font-bold text-gray-900'>{session?.user?.name}</p>
            </div>

            {/* Email */}
            <div className='bg-gradient-to-br from-purple-50 to-transparent p-4 rounded-xl border border-purple-100'>
              <label className='block text-sm font-semibold text-gray-600 mb-2'>Email Address</label>
              <p className='text-lg font-bold text-gray-900 break-all'>{session?.user?.email}</p>
            </div>

            {/* Account Status */}
            <div className='bg-gradient-to-br from-green-50 to-transparent p-4 rounded-xl border border-green-100'>
              <label className='block text-sm font-semibold text-gray-600 mb-2'>Account Status</label>
              <p className='text-lg font-bold text-green-600'>✓ Active</p>
            </div>

            {/* Role */}
            <div className='bg-gradient-to-br from-amber-50 to-transparent p-4 rounded-xl border border-amber-100'>
              <label className='block text-sm font-semibold text-gray-600 mb-2'>Account Type</label>
              <p className='text-lg font-bold text-gray-900'>{session?.role || 'User'}</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className='bg-white rounded-2xl shadow-md p-8 border border-gray-100 mb-8'>
          <h3 className='text-2xl font-bold text-gray-900 mb-6'>Quick Links</h3>
          
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link 
              href='/myboking'
              className='flex items-center gap-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition border border-blue-100'
            >
              <div className='text-2xl'>📅</div>
              <div>
                <p className='font-bold text-gray-900'>My Bookings</p>
                <p className='text-sm text-gray-600'>View your service bookings</p>
              </div>
            </Link>

            <Link 
              href='/service'
              className='flex items-center gap-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-xl transition border border-purple-100'
            >
              <div className='text-2xl'>🏥</div>
              <div>
                <p className='font-bold text-gray-900'>Services</p>
                <p className='text-sm text-gray-600'>Browse all services</p>
              </div>
            </Link>

            <Link 
              href='/contact'
              className='flex items-center gap-3 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition border border-green-100'
            >
              <div className='text-2xl'>💬</div>
              <div>
                <p className='font-bold text-gray-900'>Contact</p>
                <p className='text-sm text-gray-600'>Get in touch with us</p>
              </div>
            </Link>

            <Link 
              href='/about'
              className='flex items-center gap-3 p-4 bg-amber-50 hover:bg-amber-100 rounded-xl transition border border-amber-100'
            >
              <div className='text-2xl'>ℹ️</div>
              <div>
                <p className='font-bold text-gray-900'>About Us</p>
                <p className='text-sm text-gray-600'>Learn more about TrustCare</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Account Security */}
        <div className='bg-gradient-to-br from-red-50 to-transparent rounded-2xl shadow-md p-8 border border-red-100'>
          <h3 className='text-xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
            <FaShieldAlt className='text-red-500' /> Account Security
          </h3>
          <p className='text-gray-600 mb-4'>Your account is protected with secure authentication. Keep your email and password safe.</p>
          <button 
            onClick={() => signOut()}
            className='btn btn-error btn-outline rounded-xl'
          >
            <FaSignOutAlt /> Logout From All Devices
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProfileHero