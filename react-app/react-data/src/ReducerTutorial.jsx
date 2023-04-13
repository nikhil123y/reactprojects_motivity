import React, { useReducer, useState } from 'react'



const reducer=(state,action)=>{

    switch(action.type){

        case "increment":
            return {count:state.count+1,showText:state.showText}

        case "toggleshowtext":
            return {count:state.count,showText: !state.showText}
            
        default:
            return state;    
    }
}


const ReducerTutorial = () => {

    // const [count,setCount]=useState(0);
    // const [showText,setShowText]=useState(true);

    const[state,dispatch]=useReducer(reducer,
        {count:0,showText:true});

        console.log(state.count);

  return (
    <>
    <div>
        <h1>{state.count}</h1>
        <button onClick={()=>{
            dispatch({type:"increment"});

            dispatch({type:"toggleshowtext"});
           
        }}>click here</button>

    </div> 

    {state.showText && <p>this is a text</p>}
    
    </>
  )
}

export default ReducerTutorial