import React from 'react'
import assets from '../assets/assets'

export default function AppDowload() {
  return (
    <div className='dowload'>
      <p>For Better Experience Dowload <br /> Tomato App </p>
      <div className="dowload-platforms">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}
