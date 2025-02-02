import React, { useContext } from 'react'
import './css/PlaceOrder.css';
import { StoreContext } from '../context/StoreContext';
export default function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='placeorder'>
      <div className="placeorderleft">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" placeholder='Email address' />
        <input type="text" placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type="text" placeholder='Phone Number' />
      </div>
      <div className="placeorderright">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
            <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:3}</p>
            </div>
            <div className="cart-total-details">
            <p>Total Fee</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}
