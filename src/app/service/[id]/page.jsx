import { getSerive } from '@/action/server/service';
import ServiceDetails from '@/Components/service/ServiceDetails'
import React from 'react'

const DetailsPage = async ({params}) => {

  const {id} = await params;

  const service = await getSerive(id)

  return (
    <div>
      <ServiceDetails service={service}/>
    </div>
  )
}

export default DetailsPage