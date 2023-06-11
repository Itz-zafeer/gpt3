import React from 'react'
import Cirlcle from '../../assets/images/icons/possibility/circle.svg'
import Message from '../../assets/images/icons/possibility/message.svg'
import MyApps from '../../assets/images/icons/possibility/myapps.svg'
import GirlImg from '../../assets/images/possibility/girl.png'

const PossibilityImg = () => {
  return (
    <div className='relative md:w-[25.4166666667vw]  '>
       <div className='bg-[#042C54] md:py-[13.9583333333vw] rounded-tr-[13.1944444444vw]'></div>
       <img src={GirlImg} alt="GirlImg" className='z-[1] absolute md:left-[4.93055555556vw] md:top-[-9.72222222222vw] min-w-[32.9756944444vw]'/>
       <img src={Cirlcle} alt="Cirlcle" className='absolute md:left-[4.36597222222vw] md:top-[-14.2361111111vw] min-w-[22.6354166667vw] z-[-1]'/>
       <span className='bg-[#042C54] absolute md:w-[5.17013888889vw] md:h-[5.17013888889vw] md:rounded-[1.18055555556vw] flex justify-center items-center top-[-10.4166666667vw] md:left-[3.54166666667vw]'>
        <img src={Message} alt="Message"  className='md:w-[2.63888888889vw] '/>
       </span>
       <div className='bg-[#FF8A71] absolute md:w-[12.0645833333vw] md:h-[5.17013888889vw] md:rounded-[1.18055555556vw] flex justify-center items-center md:gap-x-[0.76388888888vw] top-[-5.17013888889vw] md:left-[22.5694444444vw]'>
        <img src={MyApps} alt="MyApps"  className='md:w-[2.36111111111vw] '/>
        <span className='text20 font-[700]'>My Apps</span>
       </div>
    </div>
  )
}

export default PossibilityImg
