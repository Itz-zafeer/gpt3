import React from 'react'
import ShortHeading from './utils/ShortHeading'
import Gpt3Text from './utils/Gpt3Text'
import Futures from './Futures'

const Future = () => {
    return (
        <div className='relative'>
        <span class="absolute md:left-0 top-[-1.875vw] md:w-[23.125vw] md:h-[53.9583333333vw] bg-[#07325F] blur-[19.5833333333vw]"></span>
            <div className='Container1160 flex justify-between md:pt-[13.9583333333vw] md:pb-[3.125vw] relative z-[2]'>
            <div className='md:w-[29.5833333333vw] flex flex-col md:gap-y-[2.36111111111vw]'>
                <ShortHeading title={"The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen."} />
                <Gpt3Text classes={"text-[#FF8A71]"} title={"Request Early Access to Get Started"} />

            </div>
            <Futures />
        </div>
        </div>
    )
}

export default Future
