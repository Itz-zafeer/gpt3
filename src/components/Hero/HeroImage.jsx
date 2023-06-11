import React from 'react'
import HeroImg from '../../assets/images/hero/heroImg.png'

const HeroImage = () => {
  return (
    <div className='animate__tada animate__animated animate__infinite	infinite absolute md:top-[8.84722222222vw] right-[-4.66111111111vw] md:w-[35.3479166667vw] '>
    <img src={HeroImg} alt="HeroImg" className='relative z-[3] w-full h-full' />
    <span className='absolute inset-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[19.7916666667vw] h-[19.7916666667vw] bg-[#0F6BCD] blur-[7.43055555556vw]'></span>
</div>
  )
}

export default HeroImage
