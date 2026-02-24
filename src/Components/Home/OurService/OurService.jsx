import ServiceCard from '@/Components/service/ServiceCard'
import Link from 'next/link'
import React from 'react'

const OurService = () => {
  return (
    <div>
        <h2 className='text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-center font-bold mb-10'>Our Service</h2>
        <ServiceCard/>
    </div>
  )
}

export default OurService