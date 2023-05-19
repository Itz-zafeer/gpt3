import React from 'react'

const Button = ({classes,title,spanclasses}) => {
  return (
    <>
       <div className={`cursor-pointer bg-[#FF4820] ${classes} flex justify-center items-center`}>
              <span className={`${spanclasses}`}>{title}</span>

            </div>
    </>
  )
}

export default Button
