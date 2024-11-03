import React, { useState } from 'react'
import assets from '../../assets/assets'
import './Login.css'

export default function Login({setLogin}) {
    const [curState, setCurState] = useState("Login")
  return (
    <div className='login'>
      <form className='login-container'>
        <div className="login-title">
            <h2>{curState}</h2>
            <img onClick={()=>setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-inputs">
            {curState==="Login"?<></>:<input type="text" placeholder='Your name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='Password' required />
        </div>
        <button>{curState==="Sign Up"?"Create accout":"Login"}</button>
        <div className="login-condition">
            <input type="checkbox" required />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, quos!</p>
        </div>
        {curState==="Login"?<p>Create a new account? <span onClick={()=>setCurState("Sign Up")}>Click here</span></p>:<p>Already ahve an account? <span onClick={()=>setCurState("Login")}>Login here</span></p>}

      </form>
    </div>
  )
}
