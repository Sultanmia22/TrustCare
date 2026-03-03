'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const ProfileHero = () => {

  const { data: session, status } = useSession()

  console.log(session)

  return (
    <div className='flex flex-col shadow-md h-[500px] overflow-hidden rounded-xl'>
      <div className='h-1/3  bg-linear-to-r from-blue-950 to-sky-800 rounded-y-xl'>

      </div>

      <div className=' relative h-2/3 w-full rounded-y-xl px-5'>
        <div className='absolute -top-14 left-1/2 -translate-x-1/2 w-28 h-28 border-2 border-gray-300  rounded-full'>
          <img src={session?.user.image} alt="" className='rounded-full w-28 h-28 object-cover' />
        </div>

        <div className='mt-15 text-center flex flex-col gap-0.5 border-b-2 border-b-gray-200 pb-5'>
          <span className='text-xl font-bold text-gray-800'>{session?.user.name}</span>
          <span className='text-gray-400'>{session?.user.email}</span>
        </div>



        <div className='mt-5 flex justify-between'>

          <div>
            <div>
              <span className='font-bold text-gray-600'> Full Name : </span>
              <span className='text-gray-500'>{session?.user.name}</span>
            </div>

            <div className='mt-2'>
              <span className='font-bold text-gray-600'> Email : </span>
              <span className='text-gray-500'>{session?.user.email}</span>
            </div>
          </div>

          <div>
            <span className='font-bold'>Status : </span>
            <span className='text-gray-400'>{session?.role}</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ProfileHero