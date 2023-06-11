import React from 'react'
import Logo from '../utils/Logo'
import Links from './Links'
import { Link } from 'react-router-dom'
const LinksData = [
    {
        title: "Links",
        ul: [
            {
                Text: "Overons"
            },
            { Text: "Social Media" },
            { Text: "Counters" },
            {
                Text: "Contact",
            }
        ]
    },
    {
        title: "Company",
        ul: [
            {
                Text: "Terms & Conditions"
            },
            { Text: "Privacy Policy" },
            { Text: "Contact" },
            
        ]
    },
    {
        title: "Get in touch",
        ul: [
            {
                Text: "Crechterwoord K12 182 DK Alknjkcb"
            },
            { Text: "085-132567" },
            { Text: "info@payme.net" },
            
        ]
    },
]

const Footer = () => {
    return (
        <footer className='bg-[#031B34]'>
            <div className='Container1044 md:pt-[12.1527777778vw]
            md:pb-[1.875vw]'>
                <h3 className='animate__animated animate__bounce animate__infinite	infinite heading62 md:max-w-[57.0138888889vw] text-center mx-[auto]'>Do you want to step in to the future before others</h3>
                <div className="footer__Btn ">
                    <span className="text18 font-[400]">Request Early Access</span>
                </div>
              <div className='
              md:pt-[8.88888888889vw]'>
              <div className='flex items-start
                md:gap-x-[16.4583333333vw]'>
                    <div>
                        <Logo classes={"md:w-[8.19444444444vw]"} />
                        <span className='text12 md:w-[11.6666666667vw] block mt-[1.73611111111vw]'>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</span>
                    </div>
                    <div className='flex  md:gap-x-[5vw]'>
                        {LinksData.map((LinksD,index) => (
                            <div className='md:w-[11.3888888889vw]'  key={index}>
                                <h6 className='heading24 md:leading-[unset] after:hidden '>{LinksD.title}</h6>
                                <ul className='text18 flex flex-col md:gap-y-[1.73611111111vw] 
                 md:mt-[1.73611111111vw]' >
                                {LinksD.ul.map((list,listindex)=>(
                                  
                                    <li  key={listindex}>
                                        <Link to={"/"}>{list.Text}</Link>
                                    </li>
                                ))}
                                </ul>

                            </div>
                        ))}




                    </div>
                </div>
                <span className='text18
                text-center block md:mt-[5.76388888889vw]'>© 2021 GPT-3. All 
                rights reserved.</span>
              </div>
            </div>
        </footer>
    )
}

export default Footer
