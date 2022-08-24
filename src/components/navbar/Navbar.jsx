import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <label className='companyLabel'>Company Name</label>
            <Link className="link" to="/">
                <button className='homeButton'>Home </button>
            </Link>
        </div>
    )
}

export default Navbar