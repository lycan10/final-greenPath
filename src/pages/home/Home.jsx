import React from 'react'
import './home.css'
import Footer from '../../components/footer/Footer'
import Review from '../../components/review/Review'
import AboutH from '../../components/aboutH/AboutH'
import Stats from '../../components/stats/Stats'
import CoreValues from '../../components/corevalues/CoreValues'
import Services from '../../components/services/Services'
import Header from '../../components/header/Header'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <AboutH />
        <CoreValues />
        <Stats />
        <Services />
        <Review />
        <Footer />
    </div>
  )
}

export default Home
