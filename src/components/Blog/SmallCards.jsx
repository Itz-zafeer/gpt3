import React from 'react'
import Card from './Card'
const CardsData = [
    {
        id:1,
        img:'../../src/assets/images/Blog/smallcards/1.png',
        date:"Sep 26, 2021",
        heading:"GPT-3 and Open  AI is the future. Let us exlore how it is?",
        readmore:"Read Full Article",
    },
    {
        id:2,
        img:'../../src/assets/images/Blog/smallcards/2.png',
        date:"Sep 27, 2021",
        heading:"2GPT-3 and Open  AI is the future. Let us exlore how it is?",
        readmore:"2Read Full Article",
    },
    {
        id:3,
        img:'../../src/assets/images/Blog/smallcards/3.png',
        date:"Sep 28, 2021",
        heading:"3GPT-3 and Open  AI is the future. Let us exlore how it is?",
        readmore:"3Read Full Article",
    },
    {
        id:4,
        img:'../../src/assets/images/Blog/smallcards/4.png',
        date:"Sep 29, 2021",
        heading:"4GPT-3 and Open  AI is the future. Let us exlore how it is?",
        readmore:"4Read Full Article",
    },
]
 

const SmallCards = () => {
    return (
        
        
        <div className='md:w-[48.75vw] flex flex-wrap md:gap-[3.33333333333vw]'>
        {CardsData.map((CardsD , index)=>(
            <Card img={CardsD.img} readmore={CardsD.readmore}
            date={CardsD.date} heading={CardsD.heading}  key={index}/>

        ))}
        </div>
    )
}

export default SmallCards
