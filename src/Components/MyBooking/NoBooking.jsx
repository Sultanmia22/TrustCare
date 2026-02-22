import React from 'react'

const NoBooking = () => {
  return (
    <div>
        <div className="flex flex-col items-center justify-center  px-4">
  {/* Icon Container */}
  <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mb-6">
    <svg 
      className="w-10 h-10 text-blue-400" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={1.5} 
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
      />
    </svg>
  </div>

  {/* Heading */}
  <h3 className="text-xl font-semibold text-gray-800 mb-2">
    You haven't made any bookings yet
  </h3>

  {/* Description */}
  <p className="text-gray-500 text-center max-w-sm mb-8">
    Explore our services and book your first appointment today
  </p>

</div>
    </div>
  )
}

export default NoBooking