import React from 'react'
import { useParams } from 'react-router-dom'





const User = () => {

    const params=useParams();
    const {names}=params;

    console.log(names);
    
  return (
    <div>
        
        <h1>This is {names}'s page</h1>
        
    </div>
  )
}

export default User