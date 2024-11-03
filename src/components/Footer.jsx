import React from 'react'
import assets from '../assets/assets'
import './css/Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-content">
        <div className="footer-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et, odio recusandae illum inventore dolorem voluptates incidunt quo ducimus perspiciatis id nostrum harum obcaecati consectetur eaque iste blanditiis ex accusantium aliquid?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+998 99 902-01-29</li>
                <li>shukurulloganisherov5@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Tomato.com - All RIght Reserved
      </p>
    </div>
  )
}
