import React from 'react'
import logo from "../../images/logo.png"
import { FacebookSvg, InstagramSvg, LinkedinSvg, TwitterSvg } from '../../svg/svg'
import "./Footer.scss"

export const Footer = () => {
  return (
    <footer>
      <div className='container'>

        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>

        <div className='footer-content'>
          <p>12345 Ocean Ave. <br /> Long Branch, NJ</p>
          <hr />
          <p>732-555-1234</p>
          <div className='legal-content'>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <p><span>Website by Larsen Web Designs.com</span></p>
        </div>

        <div className='social-block'>
          <span> <FacebookSvg /> </span>
          <span> <InstagramSvg /> </span>
          <span> <LinkedinSvg /> </span>
          <span> <TwitterSvg /> </span>
        </div>

      </div>
    </footer>
  )
}