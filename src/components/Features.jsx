import React from 'react'
import Feature from './Feature'
const FeatureData = [
    {
        id:1,
        title: "Chatbots",
        text: "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
    },
    {
        id:2,
        title: "Knowledgebase",
        text: "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b "
    },
    {
        id:3,
        title: "Education",
        text: "2At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b2"
    },
]


const Features = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
            {FeatureData.map((Featur)=>(
                <Feature title={Featur.title} text={Featur.text} key={Featur.id}/>

    ))}

            </div>




        </>


    )
}

export default Features
