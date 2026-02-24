import Link from 'next/link'
import React from 'react'

const ServiceCard = () => {
    return (
        <div className="max-w-7xl mx-auto py-10 px-4">
            {/* Grid Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-slate-50/50 p-6 md:p-10 rounded-3xl border border-slate-100'>

                {/* Baby Care */}
                <div className='group bg-white shadow-sm hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 flex flex-col'>
                    <div className='relative overflow-hidden aspect-video'>
                        <img 
                            src="/baby-care.png" 
                            alt="Baby Care" 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                        />
                        <div className='absolute top-4 left-4'>
                            <span className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm uppercase tracking-wider'>
                                Child Care
                            </span>
                        </div>
                    </div>

                    <div className='p-6 flex flex-col flex-grow'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-3'>Baby Care</h2>
                        <p className='text-gray-600 leading-relaxed mb-6 flex-grow'>
                            Safe and loving childcare at your home. Our certified caretakers handle feeding, bathing, and playtime with utmost care.
                        </p>

                        <div className='flex items-center gap-2 flex-wrap mb-8'>
                            {['Newborn', 'Babysitting', 'Full-day'].map(tag => (
                                <span key={tag} className='px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-lg border border-amber-100'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={'/service/baby-care'} className='btn btn-primary w-full rounded-xl normal-case text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40'>
                            View Details
                        </Link>
                    </div>
                </div>

                {/* Elderly Care */}
                <div className='group bg-white shadow-sm hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 flex flex-col'>
                    <div className='relative overflow-hidden aspect-video'>
                        <img 
                            src="/Elderly-care.jpg" 
                            alt="Elderly Care" 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                        />
                        <div className='absolute top-4 left-4'>
                            <span className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-secondary shadow-sm uppercase tracking-wider'>
                                Senior Care
                            </span>
                        </div>
                    </div>

                    <div className='p-6 flex flex-col flex-grow'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-3'>Elderly Service</h2>
                        <p className='text-gray-600 leading-relaxed mb-6 flex-grow'>
                            Compassionate care for your elderly parents. We assist with daily routines, medicine reminders, and companionship.
                        </p>

                        <div className='flex items-center gap-2 flex-wrap mb-8'>
                            {['Daily Care', 'Medicine', 'Companion'].map(tag => (
                                <span key={tag} className='px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-lg border border-amber-100'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={'/service/elderly-care'} className='btn btn-primary w-full rounded-xl normal-case text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40'>
                            View Details
                        </Link>
                    </div>
                </div>

                {/* Sick Care */}
                <div className='group bg-white shadow-sm hover:shadow-2xl rounded-3xl overflow-hidden transition-all duration-500 flex flex-col'>
                    <div className='relative overflow-hidden aspect-video'>
                        <img 
                            src="/sick-care.webp" 
                            alt="Sick Care" 
                            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105' 
                        />
                        <div className='absolute top-4 left-4'>
                            <span className='bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-accent shadow-sm uppercase tracking-wider'>
                                Nursing
                            </span>
                        </div>
                    </div>

                    <div className='p-6 flex flex-col flex-grow'>
                        <h2 className='text-2xl font-bold text-gray-800 mb-3'>Sick People Service</h2>
                        <p className='text-gray-600 leading-relaxed mb-6 flex-grow'>
                            Home nursing care for patients recovering from illness. Trained nurses for medication monitoring and recovery support.
                        </p>

                        <div className='flex items-center gap-2 flex-wrap mb-8'>
                            {['Home Nurse', 'Post-Surgery', 'Monitoring'].map(tag => (
                                <span key={tag} className='px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-lg border border-amber-100'>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <Link href={'/service/sick-care'} className='btn btn-primary w-full rounded-xl normal-case text-lg shadow-lg shadow-primary/20 hover:shadow-primary/40'>
                            View Details
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ServiceCard