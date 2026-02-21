import React from 'react'
import ViewDetailsButton from './ViewDetailsButton'
import CancelBooking from './CancelBooking'

const BookingInfo = () => {
  return (
    <div>
        <div className="overflow-x-auto">
  <table className="table table-zebra bg-primary/5">
    {/* head */}
    <thead>
      <tr>
        <th>No.</th>
        <th>Service Name</th>
        <th>Duration</th>
        <th>Location</th>
        <th>Total Cost</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td>4000</td>
        <td>Pending</td>
        <td >
            {/* <button className='btn btn-sm text-primary bg-secondary/10'>View Details</button> */}
            <div className='flex  items-center gap-2'>
                <ViewDetailsButton/>
                <CancelBooking/>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default BookingInfo