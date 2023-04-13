import './App.css';
import Child from './Child';
import React,{createContext, useState} from 'react';
import FormData from './FormData';

export const GlobalINfo=createContext();

function App() {

  const [color,setcolor]=useState('green')

  const getDay=(item)=>{
    console.warn(item);
  }

  return (
    <>
    <GlobalINfo.Provider value={{appColor:color,getDay:getDay}}>

    <h1>App componen</h1>
    <Child/>
    </GlobalINfo.Provider>
    <FormData/>
    </>
  );
}

export default App;
