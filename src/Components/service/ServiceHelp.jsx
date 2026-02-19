import React from 'react'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ServiceHelp = () => {
  return (
    <div className='bg-secondary/5 flex flex-col justify-center items-center p-5 md:p-10 gap-4 rounded-2xl mb-20'>
        <div className='text-center space-y-2'>
        <h2 className='text-2xl md:text-2xl lg:text-3xl font-semibold'>Need help choosing the right service?</h2>
        <p>Our support team is here to guide you. Contact us anytime.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center gap-2'>
            <button className='flex items-center gap-2 btn btn-primary'> <IoIosCall /> call: +880 1746 931945 </button>
            <button className='flex items-center gap-2 btn btn-secondary'> <MdEmail /> email: sultamia5732@gmail.com </button>
        </div>
    </div>
  )
}

export default ServiceHelp