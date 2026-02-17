import React from 'react'

const OurService = () => {
  return (
    <div>
        <h2 className='text-2xl md:text-2xl lg:text-4xl xl:text-5xl text-center font-bold mb-10'>Our Service</h2>
        {/* Service Card */}
        <div className='serviceCard-parent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 bg-secondary/5 p-5 md:p-15 rounded-2xl'>

            {/* Baby Care */}
            <div className=' bg-white shadow-xl hover:shadow-2xl rounded-2xl hover:-translate-y-2 duration-300 transition-transform  p-2 flex flex-col justify-between'>
                <div className='card-image'>
                    <figure>
                        <img src="/baby-care.png" alt="" />
                    </figure>
                </div>

                <div className='card-body'>
                    <h2 className='card-title text-xl md:text-2xl font-bold'>Baby Care</h2>
                    <p className=''>Safe and loving childcare at your home. Our certified caretakers handle feeding, bathing, sleep routines, and playtime.</p>

                    <div className='flex items-center gap-2 flex-wrap'>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Newborn</span>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Babysitting</span>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Full-day</span>
                    </div>

                    <div>
                        <button className='btn btn-primary w-full'>Book Now</button>
                    </div>
                </div>
            </div>


             {/* Elderly Care */}
            <div className=' bg-white shadow-xl hover:shadow-2xl rounded-2xl hover:-translate-y-2 duration-300 transition-transform  p-2 flex flex-col justify-between'>
                <div className='card-image'>
                    <figure>
                        <img src="/Elderly-care.jpg" alt="" />
                    </figure>
                </div>

                <div className='card-body'>
                    <h2 className='card-title text-xl md:text-2xl font-bold'>Elderly Service</h2>
                    <p>Compassionate care for your elderly parents. We assist with daily routines, medicine reminders, and companionship.</p>

                    <div className='flex items-center gap-2 flex-wrap'>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Daily Care</span>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Medicine</span>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Companion</span>
                    </div>

                    <div>
                        <button className='btn btn-primary w-full'>Book Now</button>
                    </div>
                </div>
            </div>


              {/* Elderly Care */}
            <div className=' bg-white shadow-xl hover:shadow-2xl rounded-2xl hover:-translate-y-2 duration-300 transition-transform  p-2 flex flex-col justify-between'>
                <div className='card-image'>
                    <figure>
                        <img src="/sick-care.webp" alt="" />
                    </figure>
                </div>

                <div className='card-body'>
                    <h2 className='card-title text-xl md:text-2xl font-bold'>Sick People Service</h2>
                    <p>Home nursing care for patients recovering from illness or surgery. Trained nurses for medication and monitoring.</p>

                    <div className='flex items-center gap-2 flex-wrap'>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Home Nurse</span>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Post-Surgery</span>
                        <span className='px-3 py-1.5 bg-amber-100 text-semibold rounded-xl'>Monitoring</span>
                    </div>

                    <div>
                        <button className='btn btn-primary w-full'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurService