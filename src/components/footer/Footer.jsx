import React from 'react'
import './footer.css'
import logo from '../../assets/Green-Path-Inverse.png'
import { Link } from 'react-router-dom'
import { AiFillTwitterSquare, AiFillFacebook, AiFillLinkedin} from "react-icons/ai";
const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='footer-top'>
            <div className='footer-image'>
                <img src={logo} alt='company-logo'/>
            </div>
                <div className='footer-company'>
                <h1>Company</h1>
                <ul>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>Who we are</span></Link>
                    </li>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>Services we provide</span></Link>
                    </li>
                    <li>
                        <Link className='footer-link-cta' to='/'><span>Contact us</span></Link>
                    </li>
                </ul>
            </div>
            <div className='footer-info'>
            <h1>Location</h1>
                <p>090X XXX XXXX</p>
                <p>greenpathdevco@gmail.com</p>
                <p>3, Tito Bros Street, Asokoro, Abuja.</p>
            </div>
        </div>

        <div className='footer-bottom'>
            <p>@ {date.getFullYear()} Green Path Development</p>
            <div className='social-icon'>
                    <AiFillFacebook  className='footer-icon'/>
                    <AiFillTwitterSquare  className='footer-icon'/>
                    <AiFillLinkedin  className='footer-icon'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
