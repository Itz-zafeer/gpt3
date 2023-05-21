import React from 'react'
import Gpt3DesignHeading from './utils/Gpt3DesignHeading'
import Gpt3Text from './utils/Gpt3Text'
import Features from './Features'
import ShortHeading from './utils/ShortHeading'

const WhatIsGpt3 = () => {
    return (
        <section>
            <div className='Container1170 md:mt-[8.81944444444vw] Gpt3  relative overflow-hidden'>
            <div className='absolute w-full h-full inset-0'>
            <div className='w-[14.5833333333vw] md:h-[8.95833333333vw] bg-[#0F4279] blur-[4.16666666667vw] absolute inset-0'></div>
            <div className='w-[13.6805555556vw] md:h-[16.4583333333vw] bg-[#1B78DE] blur-[6.94444444444vw] absolute bottom-0 right-0'></div>

            </div>
                <div className='Container1063 md:py-[4.86111111111vw] flex flex-col md:gap-y-[6.38888888889vw] relative z-[2]'>
                    <div className='flex md:gap-x-[10.6944444444vw] items-start'>
                        <Gpt3DesignHeading title={"What is GPT-3"} />
                        <Gpt3Text classes={" md:max-w-[50.7638888889vw]"} title={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."} />

                    </div>
                    <div className='flex justify-between items-center'>
                    <ShortHeading classes={" md:max-w-[32.7777777778vw]"} title={"The possibilities are beyond your imagination"} />
            <Gpt3Text classes={"#FF8A71"} title={"Explore The Library"} />

                    </div>
                        <Features />
                </div>
            </div>
        </section>
    )
}

export default WhatIsGpt3
