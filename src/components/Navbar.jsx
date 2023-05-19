import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul className='text18 flex md:gap-x-[3.19444444444vw] items-center'>

        <li>
          <Link to={"/"}>
            <span href="">Home</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <span href="">What is GPT?</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <span href="">Open AI</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <span href="">Case Studies</span>
          </Link>
        </li>
        <li>
          <Link to={"/"}>
            <span href="">Library</span>
          </Link>
        </li>

         
      </ul>
    </nav>
  )
}

export default Navbar
