import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Home = () => {

  const navigate=useNavigate();

  console.log(navigate);

  const navToPage=(url)=>{
    navigate(url);
  }

  return (
    <>
    <p>Hello ,this is home page</p>
    <p>We are learning react</p>
    <Link to='/about'>Go to About Page</Link>

    <button  onClick={()=> navToPage('/about')}>Go to About Page</button>

    <br></br>
    <button  onClick={()=>navToPage('/filter')}>Go toFilter PAge</button>
    
    </>
  )
}

export default Home