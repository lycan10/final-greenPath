import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../navbar/Navbar'
import './header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => { 
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='header'>
    <Navbar />
      <div className='header-container'>
      
        <div className='header-img'>
        <div className='background-opacity'></div>

        </div>
        <div className='header-text' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1> Broad <span>Vision</span> Honest  <span>Service</span> Great <span>value</span></h1>
            <p>Our goal then and now is provide quality services that exceed expectations</p>
           <div className='header-btn-div'>
           <Link className='header-button' to = '/contact'>Get In Touch</Link>
           </div>
        </div>
      
      </div>
    </div>
  )
}

export default Header
