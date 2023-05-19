import React from 'react'
import Heading from '../../components/utils/Heading'
import Button from '../../components/utils/Button'
import ProfileIcons from '../images/icons/profileIcons.svg'
import HeroImg from '../images/hero/heroImg.png'

const Home = () => {
    return (
        <section>
            <div className='h-[100svh] relative'>
                <div className='absolute inset-0 w-full h-full z-[-1] overflow-hidden'>
                    <span className='absolute md:left-[-23.3333333333vw] md:top-[-21.1805555556vw] md:w-[70.3472222222vw] h-[70.3472222222vw] bg-[#002853] blur-[19.5833333333vw]'></span>
                    <span className='absolute md:right-[-26.9444444444vw] bottom-0 w-[48.6805555556vw] h-[34.4444444444vw] bg-[#072D56] blur-[19.5833333333vw]'></span>
                </div>
                <div className='Container1170 flex items-center justify-between relative  z-[2]'>
                    <div className='md:w-[43.75vw] md:pt-[15vw] flex flex-col md:gap-y-[2.29166666667vw]'>
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
                    <div className='absolute md:top-[7.84722222222vw] right-[-7.66111111111vw] md:w-[46.3479166667vw] md:h-[48.7215277778vw]'>
                        <img src={HeroImg} alt="HeroImg" className='relative z-[3] w-full h-full' />
                        <span className='absolute inset-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[19.7916666667vw] h-[19.7916666667vw] bg-[#0F6BCD] blur-[7.43055555556vw]'></span>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </section>
    )
}

export default Home
