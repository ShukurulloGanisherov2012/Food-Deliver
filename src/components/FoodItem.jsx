import React, { useContext, useEffect } from 'react'
import './css/FoodItem.css';
import assets from '../assets/assets';
import { StoreContext } from '../context/StoreContext';

export default function FoodItem({id,name,price,description,image}) {
  
    const {cartItems, addToCart, removeFromCart} = useContext(StoreContext);

    // useEffect(()=>{
    // },[])
    return (
    <div className='fooditem'>
        <div className="foodimgcontainer">
            <img className='fooditemimage' src={image} alt="" />
            {
                !cartItems[id]?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt=""  />:<div className='fooditemcounter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="fooditeminfo">
            <div className="food-item-name">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="fooditemdesc">{description}</p>
            <p className="fooditemprice">${price}</p>
        </div>
    </div>
  )
}
