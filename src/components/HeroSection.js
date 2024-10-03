import React from 'react';
import '../App.css';
import './HeroSection.css';
import home from '../ImageVideo/home_element.png';
import { Link } from 'react-router-dom';
import facebook from '../ImageVideo/facebook.png';
import instagram from '../ImageVideo/instagram.png';
import twitter from '../ImageVideo/twitter.png';



function HeroSection() {
  return (
    <div>
      <div className='banner'>
        <div className='left-column'>
         
          <h1>ADVENTURE <span>AWAITS</span></h1>
          <Link to='/sign-in' className='btn-cta'>
           GET STARTED <i class="fa-solid fa-chevron-right"></i>
          </Link>
          <Link to='/features' className='btn-cta-ft'>
          VIEW FEATURES <i class="fa-solid fa-chevron-right"></i>
          </Link>
         
          

          <p>"The platform
            that makes learning simple and engaging. Organizations can easily customize training or awareness modules,
            track progress, and empower their teams. Your journey begins now!"</p>

        </div>


        <div className='right-column'>
          <img src={home} />
        </div>


      </div>
      <div className='social-media-menu'>

        <img src={facebook} alt='fb'/>
        <img src={instagram} alt='ins'/>
        <img src={twitter} alt='tw'/>
      </div>
    </div>




  )
}

export default HeroSection
