import React from 'react';
import '../App.css';
import './HeroSection.css';
import home from '../ImageVideo/home_element.png';
import data from '../ImageVideo/data.jpg';
import powerbi from '../ImageVideo/powerbi.jpg';
import communication from '../ImageVideo/communication.jpg';
import professional from '../ImageVideo/professional.jpg';
import photography from '../ImageVideo/photography.jpg';
import coding from '../ImageVideo/coding.jpg';
import chinese from '../ImageVideo/chinese.jpg';
import art from '../ImageVideo/art.jpg';
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
                <i class="fa-solid fa-language" style={{ color: '#d67a3d' }}></i>
                <h3>Languages</h3>
                <p>31 Courses</p>
              </Link>
            </div>

            <div className='ad-card'>
              <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
                <i class="fa-solid fa-file-code" style={{ color: '#d67a3d' }} />
                <h3>Development</h3>
                <p>23 Courses</p>
              </Link>
            </div>

            <div className='ad-card'>
              <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
                <i class="fa-solid fa-chart-simple" style={{ color: '#d67a3d' }} />
                <h3>Marketing</h3>
                <p>62 Courses</p>
              </Link>
            </div>

            <div className='ad-card'>
              <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
                <i class="fa-solid fa-palette" style={{ color: '#d67a3d' }} />
                <h3>Art</h3>
                <p>42 Courses</p>
              </Link>
            </div>

            <div className='ad-card'>
              <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
                <i class="fa-solid fa-heart-pulse" style={{ color: '#d67a3d' }} />
                <h3>Health</h3>
                <p>79 Courses</p>
              </Link>
            </div>

            <div className='ad-card'>
              <Link href='' style={{ textDecoration: 'none' }} className='ad-btn'>
                <i class="fa-solid fa-flask" style={{ color: '#d67a3d' }} />
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
              text='Effective Communication: Unlock Your Potential'
              teacher='By Adoria Duong '
              duration=' 2 weeks'
              student=' 16 students'
              price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$29.99</span>}
              newPrice={<span style={{ color: '#18a52b' }}> Free</span>}
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

            <HomeCourseCard
              src={professional}
              text='Professional Practice in Business Environments'
              teacher='By Adoria Duong '
              duration=' 3 weeks'
              student=' 7 students'
              price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$35.99</span>}
              newPrice={<span style={{ color: '#18a52b' }}> Free</span>}
              path=''
            />
            <HomeCourseCard
              src={photography}
              text='Photography for Effective Marketing and Branding'
              teacher='By Adoria Duong '
              duration=' 9 weeks'
              student=' 21 students'
              price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$120.00</span>}
              newPrice={<span style={{ color: '#b8973e' }}> $79.99</span>}
              path=''
            />

            <HomeCourseCard
              src={coding}
              text='Introduction to Coding: HTML, CSS, and JavaScript Basics'
              teacher='By Adoria Duong '
              duration=' 8 weeks'
              student=' 14 students'
              price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$70.00</span>}
              newPrice={<span style={{ color: '#b8973e' }}> $39.99</span>}
              path=''
            />
            <HomeCourseCard
              src={chinese}
              text='Business Chinese: Language Skills for the Professional World'
              teacher='By Adoria Duong '
              duration=' 5 weeks'
              student=' 35 students'
              price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$45.00</span>}
              newPrice={<span style={{ color: '#18a52b' }}> Free</span>}
              path=''
            />
            <HomeCourseCard
              src={art}
              text='Creative Illustration Telling Stories Through Art'
              teacher='By Adoria Duong '
              duration=' 8 weeks'
              student=' 5 students'
              price='$49.00'
              path=''
            />
          </div>
        </div>

        <div className='ad-sum-up'>
          <div className='ad-sum-up-content'>
            <h1>200+</h1>
            <p>Active Students</p>
          </div>
          <div className='ad-sum-up-content'>
            <h1>100+</h1>
            <p>Total Courses</p>
          </div>
          <div className='ad-sum-up-content'>
            <h1>38</h1>
            <p>Instructors</p>
          </div>
          <div className='ad-sum-up-content'>
            <h1><span>100%</span></h1>
            <p>Satisfaction Rate</p>
          </div>
        </div>

        <div className='ad-student-feedback'>
          <h1><i class="fa-regular fa-comments" style={{ color: '#d67a3d' }}></i> What People Say About Wizer </h1>

          <div className='ad-feedback-container'>
            <div className='ad-feedback-content'>
              <p><i>"Wizer has transformed how we approach our studies! The platform’s structured
                modules and immediate feedback on quizzes make it easier to grasp complex
                topics and remember them longer."</i></p>
              <br></br>
              <p1>— <b>Jessica Lin</b>, Second-Year IT Student</p1>
            </div>


            <div className='ad-feedback-content'>
              <p><i>"Wizer's interactive quizzes and real-time feedback have taken our
                learning experience to another level. We can test our knowledge immediately and
                go over any mistakes with clear explanations."</i></p>
              <br></br>
              <p1>— <b>Sophie Grant</b>, Marketing Major</p1>
            </div>

            <div className='ad-feedback-content'>
              <p><i>"We love how Wizer adapts to our pace. We can review lessons or skip ahead,
                and the platform works smoothly on different devices, making it super flexible for
                our busy schedules."</i></p>
              <br></br>
              <p1>— <b>Priya Mehta</b>, Health Sciences Student</p1>
            </div>

            <div className='ad-feedback-content'>
              <p><i>"These flexible training modules make it easy for employees to
                develope their skills. We’ve seen a marked increase in employee
                engagement and knowledge retention in their daily
                performance."</i></p>
              <br></br>
              <p1>— <b>Rachel Nguyen</b>, Training Coordinator</p1>
            </div>

            <div className='ad-feedback-content'>
              <p><i>"Wizer has streamlined our onboarding process significantly.
                New hires get up to speed quickly through customized modules, allowing them to
                contribute effectively within weeks."</i></p>
              <br></br>
              <p1>— <b>Robert Morales</b>, HR Manager</p1>
            </div>

          </div>
        </div>

      </div>

    </div>




  )
}

export default HeroSection
