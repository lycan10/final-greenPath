import React,{useEffect} from 'react'
import { cardsData } from '../../constants'
import './review.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Review = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  return (
    <div className='review'>
        <div className='review-container'>
           <h1 data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">What people are saying</h1> 
           <div className='cards-container' data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            {
                cardsData.map((item)=>{
                    return(
                        <div key={item.id} className='cards'>
                            <div> {item.img} </div>
                            <p>{item.content}</p>
                            <p>{item.author}</p>
                        </div>
                    )
                })
            }
           </div>
        </div>
      
    </div>
  )
}

export default Review
