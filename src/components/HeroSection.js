import React from 'react';
import '../App.css';
import './HeroSection.css';
import img1 from '../ImageVideo/img1.jpg';
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
            <i class="fa-solid fa-splotch fa-spin"></i> Start your training today
          </Link>

          <p>"The platform
            that makes learning simple and engaging. Organizations can easily customize training or awareness modules,
            track progress, and empower their teams. Your journey begins now!"</p>

        </div>


        <div className='right-column'>
          <img src={img1} />
        </div>


      </div>
      <div className='social-media-menu'>

        <img src={facebook}/>
        <img src={instagram}/>
        <img src={twitter}/>
      </div>
    </div>




  )
}

export default HeroSection
