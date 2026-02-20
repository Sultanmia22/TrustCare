'use client'
import React, { useState } from 'react'

const BookingForm = () => {

    const [durationType,setDurationType] = useState()

    const handleDurationType = (type) => {
        console.log(type)
    }

    return (
        <div>
            <form className='bg-primary/5  p-5 md:p-10 rounded-2xl'>
                {/* Duration time and date part */}
                <div className='my-10'>
                    <div className='flex items-center gap-1'>
                        <button className='btn btn-sm text-xl font-bold rounded-xl bg-secondary/10 text-center'>1</button>
                        <h1 className='text-xl md:text-2xl font-bold'>Select Duration</h1>
                    </div>

                    <div className='my-5'>
                        <h2 className=' font-bold'>Duration Type</h2>
                        <div className='flex items-center gap-5'>
                            <label className='flex items-center gap-1'>
                                <input onChange={(e) => handleDurationType(e.target.value)} type="radio" name="duration" value="hours" />
                                <span className='md:text-xl'>Hour</span> <br />
                            </label>

                            <label className='flex items-center gap-1'>
                                <input onChange={(e) => handleDurationType(e.target.value)} type="radio" name="duration" value="days" />
                                <span className='md:text-xl'>Day</span> <br />
                            </label>
                        </div>
                    </div>

                    <div className='space-y-2 my-5'>
                        <h2 className='font-bold'>Number of Hours</h2>
                        <input type="number" className='input w-full' />
                    </div>

                       <div className='space-y-2'>
                        <h2 className='font-bold'>Booking Date</h2>
                        <input type="date" className='input w-full' />
                    </div>
                </div>

                {/* Location Part */}
                <div>
                    <div className='flex items-center gap-1'>
                        <button className='btn btn-sm text-xl font-bold rounded-xl bg-secondary/10 text-center'>2</button>
                        <h1 className='text-xl md:text-2xl font-bold'>Select Location</h1>
                    </div>

                    <div className='my-5 flex flex-col md:flex-row md:items-center gap-5'>
                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>Division</h3>
                                <input type="text" className='input w-full' />
                            </label>
                        </div>

                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>District</h3>
                                <input type="text" className='input w-full' />
                            </label>
                        </div>
                    </div>

                    <div className='my-5 flex flex-col md:flex-row md:items-center gap-5'>
                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>City/Upozila</h3>
                                <input type="text" className='input w-full' />
                            </label>
                        </div>

                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>Area</h3>
                                <input type="text" className='input w-full' />
                            </label>
                        </div>
                    </div>

                       <div className='space-y-2'>
                        <h2 className='font-bold'>Complete Address</h2>
                        <textarea placeholder='House/flat no. /Steet/Landmark' rows={20} cols={20} className='textarea w-full' />
                    </div>
                </div>

                <div className='flex items-center justify-center my-5'>  
                    <button className='btn btn-primary max-w-2xl'>Confirm Booking</button>
                </div>
            </form>
        </div>
    )
}

export default BookingForm