import React from 'react';
import './Features.css';
import secure from '../../ImageVideo/secure.jpg';
import customization from '../../ImageVideo/customization.jpg';
import quiz from '../../ImageVideo/quiz.jpg';
import explore from '../../ImageVideo/explore.mp4';

function Features() {
  return (


    <div className>
      <h1 className='title'>WIZER</h1>
      <h2 className='description'>we offer a comprehensive platform designed to elevate the educational and training experience
        by providing customizable, user-friendly modules</h2>

      <div className='card-container'>
        <div className='card'>
          <img src={customization} />
          <div className='card-content'>
            <h3>Customization</h3>
            <p className='p-cards'> Administrators and educators can design and organize learning modules based on the users' needs</p>
            <a href='' class='btn' >Read more</a>
          </div>
        </div>

        <div className='card'>
          <img src={quiz} alt='quiz' />
          <div className='card-content'>
            <h3>Interactive Training</h3>
            <p className='p-cards'>Incorporates interactive elements like quizzes, videos, simulations, and real-time exercises</p>
            <a href='' class='btn' >Read more</a>
          </div>
        </div>

        <div className='card'>
          <img src={secure} />
          <div className='card-content'>
            <h3>Secure</h3>
            <p className='p-cards'>Data privacy and security protocols are implemented to ensure the confidentiality of user information.</p>
            <a href='' class='btn'>Read more</a>
          </div>
        </div>
      </div>

      <p className='p-under-cards'>With Wizer, education goes beyond the traditional worksheet — it's interactive,
        immersive, and personalized. Whether you’re a teacher looking to spark curiosity
        or a student seeking fun, engaging content, Wizer’s dynamic tools bring every lesson
        into focus. Get ready to transform your training into a hub of active learning</p>

      <h2 className='description'>Where every worksheet becomes a journey of discovery!</h2>

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

    </div>
  )
}

export default Features
