import React from 'react'
import MainCard from './MainCard'
import SmallCards from './SmallCards'

const Blog = () => {
    return (
        <section>
            <div className='Container1170 md:pt-[10.6944444444vw]'>
                <h2 className='heading62'>A lot is happening, <br /> We are blogging about it.</h2>
                <div className='md:pt-[8.05555555556vw] md:pb-[10.6944444444vw] flex justify-between'>
                   <MainCard />
                   <SmallCards />
                   
                </div>
            </div>
        </section>
    )
}

export default Blog
