import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';
import { useState } from 'react';


function App() {

  const[cart,setCart]=useState([]);

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes className='App'>
      <Route  path='/' element={<Home cart={cart} setCart={setCart}/>} exact>
      </Route>
      <Route path='/cart' element={<Cart  cart={cart} setCart={setCart}/>}/>
      
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
