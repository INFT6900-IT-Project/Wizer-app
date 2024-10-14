import React from 'react';
import './Home.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ContactUs from '../ContactUs';


function Home() {
  return (
    <div className='home'>
      <HeroSection/>
      <br/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home
