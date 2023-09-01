import React,{useEffect} from 'react'
import { coreData } from '../../constants'
import './corevalues.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const CoreValues = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='core-values'>
        <div className='core-values-container'>
           {
            coreData.map((item)=>{
                return(
                <div key={item.id} className='core-content' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
                    <div className='core-image'> 
                    <img src={item.img} /> </div>
                    <h1>{item.title}</h1>
                </div>
                )
            })
           }
          
        </div>
    </div>
  )
}

export default CoreValues
