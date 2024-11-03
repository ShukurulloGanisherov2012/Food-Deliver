import React, { useContext, useState } from 'react';
import './css/Navbar.css';
import assets from '../assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context/StoreContext';

export default function Navbar({setLogin}) {
    const [menu, setMenu] = useState("home");
    const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <div className="nav">
      <Link to='/'><img className="logo" src={assets.logo} alt="" /></Link>
      <ul className="nav-menu">
        <Link to='/'><li onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</li></Link>
        <li onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</li>
        <li onClick={()=>setMenu("mobile.app")} className={menu==="mobile.app"?"active":""}>mobile.app</li>
        <li onClick={()=>setMenu("contact us")} className={menu==="contact us"?"active":""}>contact us</li>
      </ul>
      <div className="nav-right">
        <img src={assets.search_icon} alt="" />
        <div className="nav-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" />
            <div className={getTotalCartAmount()===0?"":"dot"}></div> </Link>
        </div>
        <button onClick={()=>setLogin(true)}>Sign in</button>
      </div>
    </div>
  );
}
