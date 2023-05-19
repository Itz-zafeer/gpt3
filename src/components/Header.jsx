import React from 'react'
import Button from '../components/utils/Button'
import Logo from '../components/utils/Logo'
import Navbar from '../components/Navbar'

const Header = () => {
  return (
    <header className='absolute inset-x-0 md:pt-[3.81944444444vw] z-[3]'>
        <div className='Container1170 flex items-center md:gap-x-[4.79166666667vw]'>
          <Logo  classes={"md:w-[4.34444444444vw]"}/>
          <Navbar />
          <div className='flex md:gap-x-[1.80555555556vw] items-center md:ml-[10.8333333333vw] '>
            <span className='text18 cursor-pointer'>Sign in</span>
            <Button classes={" md:w-[10.5555555556vw] md:h-[4.02777777778vw]  md:rounded-[0.34722222222vw]"} title={"Sign up"} spanclasses={"text18"} />
          </div>
        </div>
      </header>
  )
}

export default Header
