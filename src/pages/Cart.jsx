import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'
import './css/Cart.css';
import assets from '../assets/assets';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const { cartItems, food_list, removeFromCart,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br /><hr />
        {
          food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id}>
                  <div className="cart-item-title cart-items-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>${item.price}</p>
                    <p>{cartItems[item.id]}</p>
                    <p>{item.price * cartItems[item.id]}</p>
                    <p
                      className='cross'
                      onClick={() => removeFromCart(item.id)}
                    >
                      <img src={assets.cross_icon} alt="" />                    </p>
                  </div>
                  <hr />
                </div>
              );
            }
            return null;
          })
        }
      </div>
      <div className="cart-bottom">
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
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <input type="text" placeholder='promo code' />
          <button>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
