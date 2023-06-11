import React from 'react'
import Google from "../../assets/images/brandlogos/google.png"
import Slack from "../../assets/images/brandlogos/slack.png"
import Atlassian from "../../assets/images/brandlogos/atlassian.png"
import Dropbox from "../../assets/images/brandlogos/dropbox.png"
import Shopify from "../../assets/images/brandlogos/shopify.png"
const Brands = () => {
  return (
    <div className='flex justify-center items-center md:gap-x-[3.19444444444vw] md:pt-[8.47222222222vw]'>
        <img src={Google} alt="GoogleLogo" className='md:w-[4.93055555556vw]' />
        <img src={Slack} alt="SlackLogo" className='md:w-[6.66666666667vw]' />
        <img src={Atlassian} alt="AtlassianLogo" className='md:w-[7.77777777778vw]' />
        <img src={Dropbox} alt="DropboxLogo" className='md:w-[8.40277777778vw]' />
        <img src={Shopify} alt="ShopifyLogo" className='md:w-[5.90277777778vw]' />
    </div>
  )
}

export default Brands
