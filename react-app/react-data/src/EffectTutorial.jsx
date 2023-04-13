import React, { useEffect, useState } from 'react'
import axios from 'axios'

const EffectTutorial = () => {

    const[data,setData]=useState('');

    useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then((response)=>{
        console.log(response.data);
        setData(response.data[0].email)
        console.log("api was called")
    })

    },[]);

  return (
    <>
     <div>
        hello world {data}
     </div>


    </>
  )
}

export default EffectTutorial