import React, { useContext } from 'react'
import { GlobalINfo } from './App'

const SuperChild = () => {
    const {appColor,getDay}=useContext(GlobalINfo)

    console.log(getDay)

    const day="sunday";

    console.warn("appColor",appColor);

  return (
    <div>

        <h1 style={{color:appColor}}>SuperChild component</h1>

        <button onClick={()=>getDay(day)}>Click me</button>
    </div>
  )
}

export default SuperChild
