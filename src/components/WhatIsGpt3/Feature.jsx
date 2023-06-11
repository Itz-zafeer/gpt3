import React from 'react'

const Feature = ({title,text,id}) => {
  return (
        <div className='flex flex-col md:gap-y-[1.80555555556vw] md:w-[23.1944444444vw]' >

            <h5 className='heading24'>{title}</h5>
            <p className='text16'>{text}</p>
        </div>

  )
}

export default Feature
