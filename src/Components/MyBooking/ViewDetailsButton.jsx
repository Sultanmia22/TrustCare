'use client'
import { getSerive } from '@/action/server/service'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

const ViewDetailsButton = ({ idname }) => {

    const [detailsData, setDetailsData] = useState({})

    const modalRef = useRef()

    const handleOpenModal = () => {
        modalRef.current.showModal()
    }

    useEffect(() => {
        const getDetailsData = async () => {
            const res = await getSerive(idname)
            setDetailsData(res)
        }
        getDetailsData()
    }, [idname])

    const {
        title,
        shortDesc,
        image,
        price,
        unit,
        rating,
        caretakerCount,
        features = [],
        
    } = detailsData;


    return (
        <div>

            <button onClick={handleOpenModal} className='text-primary lg:btn lg:btn-sm lg:bg-primary lg:text-white text-sm'>View Details</button>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box flex flex-col items-center justify-center ">
                    <div className=" max-w-md p-5 rounded-xl">
                        {/* Image */}
                        <figure className="rounded-lg overflow-hidden mb-3">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-40 object-cover"
                            />
                        </figure>

                        {/* Title + Rating */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">{title}</h3>
                            <span className="text-sm bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                                ⭐ {rating}
                            </span>
                        </div>

                        {/* Short Description */}
                        <p className="text-sm text-gray-500 mt-2">
                            {shortDesc}
                        </p>

                        {/* Price + Caretaker */}
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-primary font-semibold">
                                ৳{price} / {unit}
                            </p>
                            <p className="text-xs text-gray-500">
                                {caretakerCount} Caretakers
                            </p>
                        </div>

                        {/* Features */}
                        <div className="mt-4">
                            <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                            <ul className="text-xs space-y-1 max-h-24 overflow-y-auto">
                                {features.slice(0, 4).map((feature, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        ✅ {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Button */}
                        <div className="modal-action mt-4">
                            <Link href={`/booking/${idname}`} className="btn btn-primary btn-sm w-full rounded-lg">
                                Book Now
                            </Link>
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ViewDetailsButton