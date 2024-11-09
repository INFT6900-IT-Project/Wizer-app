import React from 'react';
import '../App.css';
import './HeroSection.css';
import home from '../ImageVideo/home_element.png';
import data from '../ImageVideo/data.jpg';
import powerbi from '../ImageVideo/powerbi.jpg';
import communication from '../ImageVideo/communication.jpg';
import professional from '../ImageVideo/professional.jpg';
import photography from '../ImageVideo/photography.jpg';
import { Link } from 'react-router-dom';
import HomeCourseCard from './HomeCourseCard.js';




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

        
          <div className='ad-cards-wrap'>
          <HomeCourseCard
        src={communication}
        text='Effective Communication: Unlocking Your Potential'
        teacher='By Adoria Duong '  
        duration=' 2 weeks'
        student=' 16 students'
        price={<span style={{ textDecoration: 'line-through', color:'gray' }}>$29.99</span>}
        newPrice={<span style={{color:'#18a52b' }}> Free</span>}
        path=''
        />
        <HomeCourseCard
        src={data}
        text='Predictive Analytics & Machine Learning'
        teacher='By Adoria Duong '  
        duration=' 4 weeks'
        student=' 31 students'
        price='$49.00'
        path=''
        />
        <HomeCourseCard
        src={powerbi}
        text='Automating Reports with Power BI: Power Query and DAX'
        teacher='By Adoria Duong '  
        duration=' 7 weeks'
        student=' 3 students'
        price='$82.00'
        path=''
        />
          </div>
          <div className='ad-cards-wrap'>
          <HomeCourseCard
        src={professional}
        text='Professional Practice in Business Environments'
        teacher='By Adoria Duong '  
        duration=' 3 weeks'
        student=' 7 students'
        price={<span style={{ textDecoration: 'line-through', color:'gray' }}>$35.99</span>}
        newPrice={<span style={{color:'#18a52b' }}> Free</span>}
        path=''
        />
        <HomeCourseCard
        src={photography}
        text='Photography for Effective Marketing and Branding'
        teacher='By Adoria Duong '  
        duration=' 9 weeks'
        student=' 21 students'
        price={<span style={{ textDecoration: 'line-through', color:'gray' }}>$120.00</span>}
        newPrice={<span style={{color:'#b8973e' }}> $79.99</span>}
        path=''
        />
        
          </div>

        
        
        
        </div>
      </div>
      
    </div>




  )
}

export default HeroSection
