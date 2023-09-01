import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';
 
import './stats.css'
const Stats = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='stats'>
    <div className='stat-container'>
    <div className='cta-background'></div>
    <div className='stat-image'></div>
        <div className='stats-content' >
        <div className='vertical-lines'></div>
            <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">Contact us for you next project</h1>
            <p data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500"> Our team of experts are ready to collaborate with you and embark on a journey of <span>creativity, efficiency, and excellence.</span>  Together, we can bring your ideas to life.</p>
            
            <Link to='/contact' className='stat-button' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000"><span>Book an Appointment</span></Link>
          
        </div>
        
    </div>
      
    </div>
  )
}

export default Stats
