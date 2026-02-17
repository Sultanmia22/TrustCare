'use client'
import Image from 'next/image';
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div>
         <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false} showStatus={false} interval={5000}>
                <div className='flex items-center'>
                    <div className='space-y-3'>
                        <h2 className='text-2xl md:text-5xl font-bold text-start'>Caring Little Hearts, <br /> Every Moment</h2>
                        <p className='text-start'>Safe, loving, and professional baby care you can trust — because your child deserves the best start in life.</p>
                    </div>
                    <figure>
                        <img src="/baby-care.png" alt="" />
                    </figure>
                </div>

                 <div className='flex gap-2 items-center'>
                    <div className='space-y-2 md:space-y-3'>
                        <h2 className='text-xl md:text-5xl font-bold md:font-bold text-start'>Compassionate Care for Golden Years</h2>
                        <p className='text-start'>Providing comfort, dignity, and trusted support for your loved ones every day.</p>
                    </div>
                    <div>
                        <figure>
                        <img src="/Elderly-care.jpg" alt="" />
                    </figure>
                    </div>
                </div>

                <div className='flex gap-2 items-center'>
                    <div className='space-y-2 md:space-y-3'>
                        <h2 className='text-xl md:text-5xl font-bold md:font-bold text-start'>Compassionate Care for the Sick</h2>
                        <p className='text-start'>Professional support ensuring comfort, safety, and faster healing.</p>
                    </div>
                    <div>
                        <figure>
                        <img src="/sick-care.webp" alt="" />
                    </figure>
                    </div>
                </div>
               
            </Carousel>
    </div>
  )
}

export default Banner