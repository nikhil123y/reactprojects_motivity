import React, { useContext } from 'react'
import { GlobalINfo } from './App'
import SuperChild from './SuperChild';

const Child = () => {
    const {appColor}=useContext(GlobalINfo)

    console.warn("appColor",appColor);

  return (
    <div>

        <h1 style={{color:appColor}}>Child component</h1>

        <SuperChild/>
    </div>
  )
}

export default Child