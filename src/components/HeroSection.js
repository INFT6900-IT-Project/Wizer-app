import React from 'react';
import '../App.css';
import './HeroSection.css';
import home from '../ImageVideo/home_element.png';
import { Link } from 'react-router-dom';




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
         
          

          <p>The platform
            that makes learning simple and engaging. Organizations can easily customize training or awareness modules,
            track progress, and empower their teams. Your journey begins now!</p>

        </div>


        <div className='right-column'>
          <img src={home} />
        </div>
      </div>

      <div className='ad-overview'>
        <div className='ad-top-category'>
          <div className='ad-category-head'>
          <h2>Top Categories</h2>
          <p>Explore our popular categories</p>
          </div>
          
          <div className='ad-card-container'>

          <div className='ad-card'>
            <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
            <i class="fa-solid fa-language" style={{color: '#d67a3d'}}></i>
            <h3>Languages</h3>
            <p>31 Courses</p>
            </Link>       
          </div>

          <div className='ad-card'>
            <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
            <i class="fa-solid fa-file-code" style={{color: '#d67a3d'}}/>
            <h3>Development</h3>
            <p>23 Courses</p>
            </Link>       
          </div>

          <div className='ad-card'>
            <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
            <i class="fa-solid fa-chart-simple" style={{color: '#d67a3d'}}/>
            <h3>Marketing</h3>
            <p>62 Courses</p>
            </Link>       
          </div>

          <div className='ad-card'>
            <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
            <i class="fa-solid fa-pen-to-square" style={{color: '#d67a3d'}}/>
            <h3>Content Writing</h3>
            <p>79 Courses</p>
            </Link>       
          </div>

          <div className='ad-card'>
            <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
            <i class="fa-solid fa-flask" style={{color: '#d67a3d'}}/>
            <h3>Science</h3>
            <p>19 Courses</p>
            </Link>       
          </div>

          </div>
        
        </div>
        <div className='ad-featured-course'>
        <div className='ad-course-head'>
          <h2>Featured Courses</h2>
          <p>Discover popular courses</p>
          </div>
        </div>
      </div>
      
    </div>




  )
}

export default HeroSection
