import React, {useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Map from '../../components/map/Map'
import Navbar from '../../components/navbar/Navbar'
import './contact.css'
import banner from '../../assets/contact.jpg'
import image1 from '../../assets/phone.svg'
import image2 from '../../assets/map-pin.svg'
import image3 from '../../assets/envelope.svg'
import image4 from '../../assets/clock.svg'
import { AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

    
const Contact = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='contact'>
      <div className='contact-container'>
        <div className='contact-header'>
        <Navbar />
        <div className='contact-header-container'>
            <div className='contact-image' >
            <div className='contact-opacity'></div>
              <img src={banner} />
            </div>
            <div className='contact-title' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>
        <div className='contact-content' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <h1>Get in Touch</h1>
          <div className='contact-vertical'></div>
          <p>Our dedicated team is ready to respond to your inquiries promptly. We value your feedback and strive to provide the best possible service. Don't hesitate to get in touch with us, and we'll be more than happy to assist you.</p>
        </div>
       <div className='contact-address'>
        <div className='contact-form' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <h1>Send Us A Message</h1>
          <form >
            <input type='text' placeholder='Name' />
            <input type='email' placeholder='Email' />
            <input type='text' placeholder='Subject' />
            <textarea placeholder='Message' />
            <button>Contact Us</button>
          </form>
        </div>
        <div className='contact-details' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <h1>Contact Info</h1>
          <div className='contact-info'>
              <div className='CD' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <div className='CD-image'>
                <img src={image1} />
              </div>
              <div className='CD-text'>
                <h3>Call Us</h3>
                <p>090X XXX XXXX</p>
                <p>090X XXX XXXX</p>
              </div>
              </div>
              <div className='CD' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <div className='CD-image'>
                <img src={image3} />
              </div>
              <div className='CD-text'>
                <h3>Our Email</h3>
                <p>greenpathdevco@gmail.com</p>
              </div>
                </div> 
              <div className='CD' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <div className='CD-image'>
                <img src={image2} />
              </div>
              <div className='CD-text'>
                <h3>Our Location</h3>
                <p>No. 3 Tito Bros Street, <br/>Asokoro Abuja</p>
              </div>
              </div>      
              
                <div className='CD' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <div className='CD-image'>
                <img src={image4} />
              </div>
              <div className='CD-text'>
                <h3>Working Hours</h3>
                <p>Mon-Fri: 10AM-5PM</p>
                <p>Sat-Sun: 10AM-1PM</p>
              </div>
              </div>  
          </div>
          <div className='contact-SM' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
          <h1>Follow Us</h1>
          <div className='SM-icons'>
            <FaFacebookF className='sm-logos'  />
            <AiFillTwitterCircle className='sm-logos' />
            <AiOutlineInstagram className='sm-logos' />
          </div>
        </div>
        </div>
       </div>
       <div className='contact-map'>
        <Map />
        </div>
        <Footer /> 
      </div>
    </div>
  )
}

export default Contact
