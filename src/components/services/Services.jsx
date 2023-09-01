import React,{useEffect} from 'react'
import './services.css'
import { servicesDate } from '../../constants'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Services = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='services'>
        <div className='services-container'>
            <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">Our Services</h1>
            <div className='services-content-container' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            {
                servicesDate.map((item)=>{
                    return(
                        <div key={item.id} className='services-content'>
                            <div className='services-image'>
                            <div className='services-opacity'></div>
                                <img src={item.img} />
                            </div>
                            <div className='service-content-text'>
                                <p  style={{color:'#246a47'}}className='content-text'>{item.title}</p>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    </div>
  )
}

export default Services
