import React from 'react'
import MainCardImg from "../../assets/images/Blog/maincard.png"

const MainCard = () => {
  return (
    <div className='md:w-[28.9583333333vw]'>
    <img src={MainCardImg} alt="MainCardImg" />
    <div className='md:py-[2.60416666667vw] bg-[#042C54]'>
        <div className='md:w-[23.75vw] mx-[auto]'>
            <span className='text12 text-[#FFFFFF]'>Sep 26, 2021</span>
            <h5 className='heading24 after:hidden md:leading-[unset] tracking-[unset]'>GPT-3 and Open  AI is the future. Let us exlore how it is?</h5>
            <span className='text12 text-[#FFFFFF] md:mt-[12.9861111111vw] block'>Read Full Article</span>
        </div>
    </div>
</div>
  )
}

export default MainCard
