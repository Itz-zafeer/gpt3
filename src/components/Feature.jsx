import React from 'react'
import Gpt3DesignHeading from './utils/Gpt3DesignHeading'
import Gpt3Text from './utils/Gpt3Text'

const Feature = ({title,text,id}) => {
  return (
        <div className='flex flex-col md:gap-y-[1.80555555556vw] md:w-[23.1944444444vw]' >

            <Gpt3DesignHeading title={title} />
            <Gpt3Text title={text} />
        </div>

  )
}

export default Feature
