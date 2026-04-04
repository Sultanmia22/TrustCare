'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowRight } from 'react-icons/fa';

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      image: "/baby-care.png",
      title: "Baby Care",
      subtitle: "Safe & Loving Childcare",
      description: "Professional caregivers for your little ones at home.",
      cta: "Book Now",
      link: "/booking/baby-care",
      bgColor: "from-sky-50 to-blue-50"
    },
    {
      image: "/Elderly-care.jpg",
      title: "Elderly Care",
      subtitle: "Comfort & Support",
      description: "Compassionate care for your senior family members.",
      cta: "Book Now",
      link: "/booking/elderly-care",
      bgColor: "from-amber-50 to-orange-50"
    },
    {
      image: "/sick-care.webp",
      title: "Sick Care",
      subtitle: "Health & Recovery",
      description: "Professional nursing care for faster healing.",
      cta: "Book Now",
      link: "/booking/sick-care",
      bgColor: "from-green-50 to-emerald-50"
    }
  ];

  return (
    <div className="relative w-full">
      <Carousel 
        autoPlay={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false}
        showIndicators={false}
        interval={7000}
        transitionTime={1000}
        onChange={(index) => setActiveSlide(index)}
        emulateTouch={true}
      >
        {slides.map((slide, idx) => (
          <div key={idx} className="relative">
            {/* Hero Container */}
            <div className={`bg-gradient-to-br ${slide.bgColor} rounded-3xl overflow-hidden mx-4 my-4`}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center min-h-[500px] md:min-h-[600px]">
                
                {/* Left Content */}
                <div className="p-6 md:p-10 lg:p-14 z-10 flex flex-col justify-center">
                  {/* Badge */}
                  <div className="mb-4 inline-block">
                    <span className="badge badge-outline px-3 py-2 text-xs font-bold rounded-full">
                      Premium Service
                    </span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 text-gray-900 leading-tight">
                    {slide.title}
                  </h1>

                  {/* Subtitle */}
                  <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-gray-700">
                    {slide.subtitle}
                  </h2>

                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Link 
                      href={slide.link}
                      className="btn btn-primary rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all px-8"
                    >
                      {slide.cta}
                      <FaArrowRight size={16} />
                    </Link>
                    <Link 
                      href="/service"
                      className="btn btn-outline rounded-xl font-bold text-gray-700 border-gray-300 hover:bg-gray-100 px-8"
                    >
                      Learn More
                    </Link>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex gap-6 mt-10">
                    <div>
                      <div className="text-2xl font-black text-primary">500+</div>
                      <div className="text-sm text-gray-600">Happy Families</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-primary">24/7</div>
                      <div className="text-sm text-gray-600">Support</div>
                    </div>
                    <div>
                      <div className="text-2xl font-black text-primary">10+</div>
                      <div className="text-sm text-gray-600">Years Expert</div>
                    </div>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[400px] md:h-full overflow-hidden flex items-center justify-center">
                  <img 
                    src={slide.image} 
                    alt={slide.title}
                    className="w-full h-full object-cover rounded-2xl md:rounded-r-3xl "
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white/20 rounded-2xl md:rounded-r-3xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      {/* Slide Indicators - Bottom */}
      <div className="flex justify-center gap-2 mt-6 pb-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {}}
            className={`transition-all duration-300 rounded-full ${
              i === activeSlide 
                ? 'w-8 h-3 bg-primary' 
                : 'w-3 h-3 bg-gray-400'
            }`}
          />
        ))}
      </div>

      <style>{`
        .carousel :global {
          margin: 0;
          padding: 0;
        }

        .carousel :global(.slide) {
          background: transparent !important;
        }

        .carousel :global(.carousel-slider) {
          margin: 0;
        }

        .carousel :global(.control-arrow) {
          background: rgba(59, 130, 246, 0.8) !important;
          border: none !important;
          opacity: 0.8 !important;
          transition: all 0.3s ease !important;
          width: 50px !important;
          height: 50px !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          border-radius: 12px !important;
        }

        .carousel :global(.control-arrow:hover) {
          background: rgba(59, 130, 246, 1) !important;
          opacity: 1 !important;
        }

        .carousel :global(.control-dots) {
          display: none;
        }

        @media (max-width: 768px) {
          .carousel :global(.control-arrow) {
            width: 40px !important;
            height: 40px !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Banner