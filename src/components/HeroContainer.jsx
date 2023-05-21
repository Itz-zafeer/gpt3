import React from 'react'
import Heading from '../components/utils/Heading'
import Button from '../components/utils/Button'
import ProfileIcons from '../assets/images/icons/profileIcons.svg'
import HeroImage from './utils/HeroImage'
const HeroContainer = () => {
  return (
    <div className='Container1170 flex items-center justify-between relative  z-[2]'>
                    <div className='md:w-[43.75vw] md:pt-[13vw] flex flex-col md:gap-y-[1.29166666667vw]'>
                        <Heading title="Let’s Build Something amazing with GPT-3 OpenAI" />
                        <p className='text20 text-[#81AFDD] md:w-[38.4722222222vw]'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                        <div className='flex flex-col md:gap-y-[2.5vw]'>
                            <form action="" className='flex md:rounded-[0.34722222222vw] overflow-hidden'>
                                <input type="text" placeholder='Your Email Address' className='text20 md:pl-[2.22222222222vw] bg-[#052D56] outline-none md:w-[31.6666666667vw] text-[#3D6184]' />
                                <Button classes="md:w-[12.0833333333vw] md:h-[5.06944444444vw]" title="Get Started" spanclasses="text20 font-[700]" />
                            </form>
                            <div className='flex items-center md:gap-x-[0.97222222222vw]'>
                                <img src={ProfileIcons} alt="ProfileIcons" className='md:w-[12.6388888889vw] cursor-pointer' />
                                <span className='text12'>1,600 people requested access a visit in last 24 hours</span>
                            </div>

                        </div>
                    </div>
                   <HeroImage />
                </div>
  )
}

export default HeroContainer
