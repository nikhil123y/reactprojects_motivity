import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
        <h1>404 page</h1>
        <p>This url is not found</p>

        <Link to='/'>Go to Home Page</Link>

    </div>
  )
}

export default Page404