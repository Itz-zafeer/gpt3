import React from 'react'
import HeaderLogo from '../../assets/images/headerLogo.svg'
import { Link } from 'react-router-dom'

const Logo = ({ classes }) => {
    return (
        <div>
            <Link to={"/"}>
                <img src={HeaderLogo} alt="HeaderLogo" className={`${classes}`} />
            </Link>

        </div>
    )
}

export default Logo
