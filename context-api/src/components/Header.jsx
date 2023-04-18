import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
  return (
    <div>
        <span className='header'>React context Api</span>
        <ul className='nav'>
            <li className='prod'>
                <Link to="/">Home Page</Link>
            </li>
            <li className='prod'>
                <Link to="/cart">Cart</Link>
            </li>

        </ul>
    </div>
  )
}

export default Header