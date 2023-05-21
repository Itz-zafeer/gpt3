import React from 'react'
import Gpt3DesignHeading from './utils/Gpt3DesignHeading'
const FuturesData = [
    {
        title: "Improving end distrusts instantly",
        text: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
    },
    {
        title: "Become the tended active",
        text: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
    },
    {
        title: "Message or am nothing",
        text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
    },
    {
        title: "Really boy law county",
        text: "Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
    },
]

const Futures = () => {
    return (
        <div className='md:w-[40.9722222222vw] flex flex-col md:gap-y-[3.125vw] md:pt-[0.55555555555vw]'>
            {FuturesData.map((FuturesD , index) => (
                <div className='flex justify-between' key={index}>
                <Gpt3DesignHeading classes={" md:tracking-[-0.04166666666vw] font-[800] after:top-[-0.27777777777vw]   text18 md:w-[11.1111111111vw]"}  title={FuturesD.title}/>
                <p className='md:w-[23.1944444444vw] text14'>{FuturesD.text}</p>

            </div>
        ))}
            
        </div>
    )
}

export default Futures
