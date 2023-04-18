import React, { useState } from 'react';
import faker from 'faker';
import SingleProduct from './SingleProduct';
import './style.css'


faker.seed(100)

const Home = ({cart,setCart}) => {

   const productsArray=[...Array(20)].map(()=>({
    id:faker.datatype.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price(),
    image:faker.random.image(),
   }))

  //  const [cart,setCart]=useState([]);

   const[prodcuts]=useState(productsArray)


  return (
   <div className='productContainer' key={productsArray.id}>
    {
      prodcuts.map((prod)=>(
       <SingleProduct 
        prod={prod}
        cart={cart}
        key={prod.id}
        setCart={setCart}/>
      ))
    }
   </div>
  )
}

export default Home