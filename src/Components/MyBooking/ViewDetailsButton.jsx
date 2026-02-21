'use client'
import React, { useRef } from 'react'

const ViewDetailsButton = () => {

    const modalRef = useRef()

    const handleOpenModal = () => {
        modalRef.current.showModal()
    }

    return (
        <div>
            
            <button onClick={handleOpenModal} className='btn btn-sm bg-primary text-white text-sm'>View Details</button>
            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <div>

                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default ViewDetailsButton