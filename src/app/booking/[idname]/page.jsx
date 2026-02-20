import { getSerive } from '@/action/server/service';
import BookingForm from '@/Components/service/BookingForm';


const ServiceBooking = async ({ params }) => {

    const { idname } = await params;

    const res = await getSerive(idname)


    console.log(res)

    return (
        <div>
            <div className='text-center space-y-2'>
                <h2 className='text-2xl md:text-2xl lg:text-4xl xl:text-5xl font-bold'>Book {res?.title}</h2>
                <p>Fill in the details below to confirm your booking</p>
            </div>

           <div className='my-10'>
             <BookingForm/>
           </div>
        </div>
    )
}

export default ServiceBooking