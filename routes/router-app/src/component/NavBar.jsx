import React from 'react'
import { Link,NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
   <>
   <ul className='navbar'>
    <li>
    <NavLink style={(isActive)=>{return {backgroundColor:isActive ?'white':'red'}}}  to="/">Home</NavLink>
    </li>
    <li><NavLink style={(isActive)=>{return {backgroundColor:isActive ?'green':'red'}}}  className='nav-bat-link'   to="/about">About</NavLink></li>

    <li><NavLink style={(isActive)=>{return {backgroundColor:isActive ?'green':'red'}}} className='nav-bat-link'  to='/contact'>Contact</NavLink></li>
   
    <li><NavLink style={(isActive)=>{return {backgroundColor:isActive ?'green':'red'}}} className='nav-bat-link'  to='/filter'>Filter</NavLink></li>
   
    <li><NavLink style={(isActive)=>{return {backgroundColor:isActive ?'green':'red'}}} className='nav-bat-link'  to='/user/anil'>Anil</NavLink></li>
    <li><NavLink style={(isActive)=>{return {backgroundColor:isActive ?'green':'red'}}} className='nav-bat-link'  to='/user/ram'>Ram</NavLink></li>
   </ul>
   </>
  )
}

export default NavBar