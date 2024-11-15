import React from 'react';
import './UserSavedCourses.css';
import HomeCourseCard from '../../../HomeCourseCard.js';
import chinese from '../../../../ImageVideo/chinese.jpg';
import accounting from '../../../../ImageVideo/accounting.jpg';
import photo from '../../../../ImageVideo/photo.jpg';
import security from '../../../../ImageVideo/security.jpg';

function UserSavedCourses() {
  return (
    <div>
      <h1 className='ad-user-pages-title'>Saved Courses</h1>

      <div className='ad-saved-courses-wrap'>
        <h3>*Come back to check your saved courses for the latest price updates and deals.</h3>
        <div className='ad-saved-courses-hot'>
        <h2><i class="fa-solid fa-fire"/> <i class="fa-solid fa-fire"/> <i class="fa-solid fa-fire"/> Hot Deals </h2>
        <p><b>1</b> course is now just <span>FREE</span>, and <b>2</b> courses are available at a discounted price! <br></br> Don't miss out on this limited-time offer!</p>
        </div>
        
        <div className='ad-saved-courses-container'>
          <HomeCourseCard
            src={chinese}
            text='Business Chinese: Language Skills for the Professional World'
            teacher='By Adoria Duong '
            duration=' 5 weeks'
            student=' 35 students'
            price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$45.00</span>}
            newPrice={<span style={{ color: '#18a52b' }}> Free</span>}
            path='/course-detail/7'
          />
          <HomeCourseCard
            src={security}
            text='Developing and Enforcing Security Protocols for Data Protection'
            teacher='By Adoria Duong '
            duration=' 10 weeks'
            student=' 20 students'
            price='$125.00'

            path=''
          />
          <HomeCourseCard
            src={accounting}
            text='Accounting Software Mastery: QuickBooks and Beyond'
            teacher='By Adoria Duong '
            duration=' 7 weeks'
            student=' 41 students'
            price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$79.00</span>}
              newPrice={<span style={{ color: '#b8973e' }}> $50.00</span>}
            path=''
          />

<HomeCourseCard
            src={photo}
            text='Documentary Photography: Telling Powerful Stories'
            teacher='By Adoria Duong '
            duration=' 8 weeks'
            student=' 19 students'
            price={<span style={{ textDecoration: 'line-through', color: 'gray' }}>$120.00</span>}
              newPrice={<span style={{ color: '#b8973e' }}> $79.99</span>}
            path=''
          />
        </div>


      </div>
    </div>
  )
}

export default UserSavedCourses
