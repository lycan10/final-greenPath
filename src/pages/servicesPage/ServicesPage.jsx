import React,{useEffect, useRef} from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import './servicesPage.css';
import { servicesDate } from '../../constants';
import video1 from '../../assets/services-vid.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';



const servicesData = [
  {
    id: 0,
    num: '01.',
    title: 'Meticulous Planning',
    content: ' Our services reflects our commitment to excellence, attention to detail, and proactive approach to achieving our goals.'
  },
  {
    id: 1,
    num: '02.',
    title: 'Perfect Execution',
    content: 'We possess the ability to flawlessly implement our plans, strategies, and initiatives, to achieve desired outcomes.'
  },
  {
    id: 2,
    num: '03.',
    title: 'On-Time Delivery',
    content: 'We are commited to delivering products, services, or projects within the agreed-upon timeframe.'
  },
  
  {
    id: 3,
    num: '04.',
    title: 'Competitive Prices',
    content: 'By offering competitive prices, we seek to gain a competitive edge, attract new customers, and retain existing ones.'
  },
];

const ServicesPage = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const playVideo = () => {
      videoElement.play().catch((error) => {
        console.error('Video playback failed:', error);
      });
    };

    playVideo();
  }, []);
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="services-page">
      <div className="services-container">
      
      <div className="parallax-container">
          <Navbar />
        <div className='service-header-container'>
          <div className="parallax-image">
            <div className="services-header-opacity"></div>
          </div>
          <div className="services-title" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1>Services</h1>
          </div>
        </div>
      </div>
      <div className="services-page-container">
          <div className="services-page-title">
            <div className="services-main-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              <h1>Our Services</h1>
              <div className="services-vertical"></div>
              <p>
                Green path development is an interdisciplinary engineering and consulting firm dedicated to delivering exceptional solutions that drive innovation and transform industries.
              </p>
            </div>
            <div className="services-page-cards" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              {servicesData.map((item) => (
                <div key={item.id} className="services-cards-content">
                  <h1 style={{color:'#246a47' }}>{item.num}</h1>
                  <h1>{item.title}</h1>
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
      </div>
        <div className='services-video'>
          <video ref={videoRef} className='video' src={video1} type='video/mp4' loop muted autoPlay playsInline />
        </div>
        <div className="services-page-main">
          <div className="services-page-content" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
            <h1>Our Specialization</h1>
            <div className="services-vertical"></div>
            <p>
              Green path development is an interdisciplinary engineering and consulting firm dedicated to delivering exceptional solutions that drive innovation and transform industries.
            </p>
            <div className="our-specialization" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500">
              {servicesDate.map((item) => (
                <div className="our-spec" key={item.id}>
                  <div className="our-spec-img">
                    <img src={item.img} alt="Specialization Image" />
                  </div>
                  <div className="our-spec-content">
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <p className="our-spec-p">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;
