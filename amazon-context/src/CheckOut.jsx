import React from 'react'
import CheckOutProduct from './CheckOutProduct'
import Subtotal from './Subtotal'

const CheckOut = () => {
  return (
    <div className='checkout'>
        <div className="checkout__left">
            <img src="" alt="" className="checkout__ad" />
            <div>
                <h2 className="checlout__title">Your Shopping Basket</h2>
            </div>
            <CheckOutProduct/>
        </div>
        <div className="checkout__right">
          <Subtotal/>
        </div>
    </div>
  )
}

export default CheckOut