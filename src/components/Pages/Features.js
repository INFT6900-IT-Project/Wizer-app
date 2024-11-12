import React from 'react';
import './Features.css';
import secure from '../../ImageVideo/secure.jpg';
import customization from '../../ImageVideo/customization.jpg';
import quiz from '../../ImageVideo/quiz.jpg';
import explore from '../../ImageVideo/explore.mp4';
import QaA from '../QaA.js'
function Features() {
  return (


    <div>
      <h1 className='ad-feature-title'>WIZER</h1>
      <h2 className='ad-feature-description'>Our platform elevates educational and training experiences with customizable, user-friendly modules. It empowers users to create personalized learning paths, delivering innovative solutions that engage and enable learners to achieve their full potential</h2>

      <div className='card-container'>
        <div className='ad-ft-card'>
          <img src={customization} />
          <div className='ad-ft-card-content'>
            <h3>Customization</h3>
            <p className='p-cards'> Administrators and educators can design and organize learning modules based on the users' needs</p>
            <a href='' class='btn' >Learn more</a>
          </div>
        </div>

        <div className='ad-ft-card'>
          <img src={quiz} alt='quiz' />
          <div className='ad-ft-card-content'>
            <h3>Interactive Training</h3>
            <p className='p-cards'>Incorporates interactive elements like quizzes, videos, simulations, and real-time exercises in training settings</p>
            <a href='' class='btn' >Learn more</a>
          </div>
        </div>

        <div className='ad-ft-card'>
          <img src={secure} />
          <div className='ad-ft-card-content'>
            <h3>Secure</h3>
            <p className='p-cards'>Data privacy and security protocols are implemented to ensure the confidentiality of user information.</p>
            <a href='' class='btn'>Learn more</a>
          </div>
        </div>
      </div>

      <p className='p-under-cards'>With Wizer, education goes beyond the traditional worksheet — it's interactive,
        immersive, and personalized. Whether you’re a teacher looking to spark curiosity
        or a student seeking fun, engaging content, Wizer’s dynamic tools bring every lesson
        into focus. Get ready to transform your training into a hub of active learning</p>

      <h2 className='ad-feature-description' style={{color: 'black'}}><b>Where every worksheet becomes a journey of discovery!</b></h2>

      <div className='video-tour'>
        <h4><i class="fa-solid fa-play" />Explore the Capabilities</h4>

        <section className='wrap-vid-desc'>
          <div className='vid'>
            <video src={explore} style={{ width: '100%' }} controls />
          </div>
          <div className='vid-desc'>
            <ul><i>"In Wizer, <b>Students </b>log in, select courses,
              complete lessons, take quizzes, and track their progress while receiving feedback.
              <b> Admins </b> manage courses, monitor student activity, provide feedback, and analyze data
              to improve course effectiveness. Both roles benefit from a streamlined, interactive learning
              experience."</i>
            </ul>
          </div>
        </section>

      </div>
      
      <QaA/>
    </div>
    
  )
}

export default Features
