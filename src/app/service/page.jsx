import Header from '@/Components/service/Header'
import ServiceCard from '@/Components/service/ServiceCard'
import ServiceHelp from '@/Components/service/ServiceHelp'
import React from 'react'

const page = () => {
  return (
    <div className='space-y-20'>
      <section>
        <Header/>
      </section>

      <section>
        <ServiceCard/>
      </section>

      <section>
        <ServiceHelp/>
      </section>
    </div>
  )
}

export default page