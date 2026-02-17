import React from 'react'
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { FaCalendarCheck } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const About = () => {
    return (
        <div className='bg-primary/5 p-5 md:p-15 rounded-2xl'>


            <div className='space-y-2 mb-10'>
                <h2 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold'>Care that feels like <span className='text-secondary'>family — always</span></h2>
                <p>TrustCare was built on a simple belief: every family deserves access to safe, compassionate, and professional caregiving — without the stress of finding it. We connect you with verified caretakers for your children, elderly parents, and loved ones who need special attention at home.</p>
            </div>

            <div className='about-card flex flex-col gap-5'>
                {/* Single Card */}
                <div className='flex flex-col md:flex-row items-center gap-4 bg-secondary/5  p-4 rounded-lg hover:translate-x-2 duration-200 transition-transform'>
                    <div className='bg-secondary/10 p-2 w-12 flex flex-col justify-center items-center rounded-lg'>
                        <AiOutlineSafetyCertificate className='text-primary' size={28} />
                    </div>

                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold'>Safe & Verified Caretakers</h4>
                        <p>Every caretaker goes through background checks, NID verification, and in-person interviews before joining our platform.</p>
                    </div>
                </div>

                   {/* Single Card */}
                <div className='flex flex-col md:flex-row items-center gap-4 bg-secondary/5  p-4 rounded-lg hover:translate-x-2 duration-200 transition-transform'>
                    <div className='bg-secondary/10 p-2 w-12 flex flex-col justify-center items-center rounded-lg'>
                        <FaCalendarCheck className='text-primary' size={28} />
                    </div>

                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold'>Effortless Booking</h4>
                        <p>Book in minutes by selecting your service, duration, and location. No phone calls, no waiting — instant confirmation.</p>
                    </div>
                </div>


                   {/* Single Card */}
                <div className='flex flex-col md:flex-row items-center gap-4 bg-secondary/5  p-4 rounded-lg hover:translate-x-2 duration-200 transition-transform'>
                    <div className='bg-secondary/10 p-2 w-12 flex flex-col justify-center items-center rounded-lg'>
                        <FaRegHeart  className='text-primary' size={28} />
                    </div>

                    <div>
                        <h4 className=' text-xl md:text-2xl font-bold'>Care for Everyone</h4>
                        <p>From newborns to elderly grandparents, and those recovering from illness — our services cover the full spectrum of family care.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About