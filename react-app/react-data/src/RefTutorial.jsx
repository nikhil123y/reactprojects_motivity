import React, { useRef } from 'react'

const RefTutorial = () => {
    const inputRef=useRef('');


    const onClick=(e)=>{
        const i=e.target.value;
        console.log(i);
        console.log(inputRef.current);
    };
  return (
    <>
    
    <h1>{inputRef}</h1>

    <input type="text"  ref={inputRef}/>

    <button onClick={onClick}>Change Name</button>
    
    </>
  )
}

export default RefTutorial