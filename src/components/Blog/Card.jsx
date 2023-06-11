import React from 'react'

const Card = ({ img, date, readmore, heading }) => {
    return (
        <div className='md:w-[22.7083333333vw]'>
            <img src={img} alt="CardImg" />
            <div className="md:py-[2.04861111111vw] bg-[#042C54]">
                <div className="md:w-[19.7222222222vw] mx-[auto]">
                    <span className="text12 text-[#FFFFFF]">
                        {date}
                    </span>
                    <h5 className="text18 md:text-[1.34166666667vw] ">
                        {heading}
                    </h5>
                    <span className="text12 text-[#FFFFFF] md:mt-[3.125vw] block">
                        {readmore}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card
