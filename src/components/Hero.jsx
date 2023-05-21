import React from 'react'
import HeroOverlays from './utils/HeroOverlays'
import HeroContainer from './HeroContainer'
const Hero = () => {
  return (
    <section>
            <div className=' relative'>
                <HeroOverlays />
                <HeroContainer />
               
            </div>
        </section>
  )
}

export default Hero
