import logo from './logo.svg';
import './App.css';
import ReducerTutorial from './ReducerTutorial';
import EffectTutorial from './EffectTutorial';
import { useState } from 'react';
import RefTutorial from './RefTutorial';

function App() {

  const [data,setData]=useState("");
  
  return (
    <>
    <div className="App">
      {/* <ReducerTutorial/> */}
      {/* <EffectTutorial/> */}
      <RefTutorial/>
    </div>

    </>
  );
}

export default App;
