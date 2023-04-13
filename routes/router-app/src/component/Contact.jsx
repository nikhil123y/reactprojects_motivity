import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
    <p>Hello, this is contact page </p>
    <p>we are group of developer</p>

    <link to='company'>Company</link>
    <link to='channel'>channel</link>
    <Link to='other'>other</Link>

    {/* <Outlet/> */}
    
    </>
  )
}

export default Contact