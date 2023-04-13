import React from 'react'
import { useParams } from 'react-router-dom'


const Filter = () => {
    const[searchParam,setSearchParams]=useParams();
    console.warn(searchParam.get('age'));

    console.warn(searchParam.get('city'));

    const age=searchParam.get('age');
    const city=searchParam.get('city');


  return (
    <>
       <h1>Filter page</h1>
       <h3>Age is  :{age} </h3>
       <h3>City is :{city} </h3>

       <button onClick={()=>{setSearchParams({age:45})}}>set Age in Query Params </button>
    </>
  )
}

export default Filter