import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'

const Cart = ({cart,setCart}) => {

  console.log(cart,"cart data")

  const[total,setTotal]=useState([])

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr) => acc+Number(curr.price),0))
  },[cart])
  return (
    <div>

      <span style={{fontSize:30}}>
        My Cart
      </span>
      <br/>
      <span style={{fontSize:30}}>Total: {total}</span>
      <div className='productContainer'>
        {
          cart.map((prod) =>{

            <SingleProduct 
             prod={prod} 
            key={prod.id}
            setCart={setCart}
            cart={cart}
            />
          })
        }
      </div>

    </div>
  )
}

export default Cart