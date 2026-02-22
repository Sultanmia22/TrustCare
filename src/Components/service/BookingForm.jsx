'use client'
import { storeServiceData } from '@/action/server/service'
import areaData from '@/data/area.json'
import { useSession } from 'next-auth/react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
const BookingForm = ({idname}) => {

    const {data:session,status} = useSession()

    const userInfo = {
        userName : session?.user?.name,
        userEmail : session?.user?.email
    }

    const { register, handleSubmit, reset,watch, formState: { errors }, } = useForm({
       defaultValues: {
        durationType: 'hours'
    }
    })


const durationType = watch('durationType')

const selecteDivision = watch('division')

const findDevison = areaData.find(item => item.division === selecteDivision)

const districts = findDevison ? findDevison.districts : [];


    const onSubmit = async (data) => {

        try{

            const formData = {
                ...data,
                idname,
                userInfo,
            }

            const res = await storeServiceData(formData)

            if(res?.insertedId){
                toast.success('Booking Confirmation Successfully!')
            }

            reset()


        }
        catch(er){
            console.log(er.message)
        }

    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className='bg-primary/5  p-5 md:p-10 rounded-2xl'>
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
                                <input {...register('durationType')}  type="radio" value="hours" />
                                <span className='md:text-xl'>Hour</span> <br />
                            </label>

                            <label className='flex items-center gap-1'>
                                <input {...register('durationType')}  type="radio"  value="days" />
                                <span className='md:text-xl'>Day</span> <br />
                            </label>
                        </div>
                    </div>

                    <div className='space-y-2 my-5'>
                        {
                            durationType === 'hours' ? <h2 className='font-bold'>Number of Hours</h2>
                                :
                                <h2 className='font-bold'>Number of Days</h2>
                        }

                        <input 
                        {...register('totalduration')}
                        type="number" 
                        className='input w-full' />
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-bold'>Booking Date</h2>
                        <input {...register('booking_date')} type="date" className='input w-full' />
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
                                <select
                                    {...register('division', { required: true })}
                                    className='select'
                                    defaultValue="">
                                    <option value="" disabled hidden>
                                        Select your Division
                                    </option>
                                    {
                                        areaData.map((data, index) =>
                                            <option key={index} value={data.division}>{data.division}</option>
                                        )
                                    }
                                </select>
                            </label>
                        </div>

                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>District</h3>
                                <select
                                    {...register('districts', { required: true })}
                                    className='select'
                                    defaultValue="">
                                    <option value="" disabled hidden>
                                        Select your District
                                    </option>
                                    {
                                        districts?.map((dis,index) => 
                                        <option key={index} value={dis}>{dis}</option>
                                        )
                                    } 
                                   
                                </select>
                            </label>
                        </div>
                    </div>

                    <div className='my-5 flex flex-col md:flex-row md:items-center gap-5'>
                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>City/Upozila</h3>
                                <input {...register('city')} type="text" className='input w-full' />
                            </label>
                        </div>

                        <div className='flex-1'>
                            <label className='space-y-2'>
                                <h3 className='font-bold'>Area</h3>
                                <input {...register('area')} type="text" className='input w-full' />
                            </label>
                        </div>
                    </div>

                    <div className='space-y-2'>
                        <h2 className='font-bold'>Complete Address</h2>
                        <textarea {...register('complete_address')} placeholder='House/flat no. /Steet/Landmark' rows={10} cols={10} className='textarea w-full' />
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