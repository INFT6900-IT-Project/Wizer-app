import React from 'react';
import './ContactUs.css';
import arrow from '../../ImageVideo/arrow_icon.png';
import msg from '../../ImageVideo/msg.png';
import CardItem from '../CardItem';
import '../CardItem.css';
import img1 from '../../ImageVideo/img1.jpg';
import adoria from '../../ImageVideo/adoria.png';
import elias from '../../ImageVideo/elias.jpg';

function ContactUs() {
  return (
    <div>
      <div className='contact-us'>


        <h1>Contact Us</h1>
        <hr color='#ea6d43' />

        <p>Already use Wizer? <a href='sign-in'>Sign in</a> so we can tailor your
          support experience! <br />Otherwise, feel free to reach any of us for
          further details on this journey to make the best use of it!
        </p>

        <div className='wrap'>
          <div className='left'>
            <img src={msg} alt='' />
          </div>

          <div className='right'>
            <input type='text' name='name' placeholder='Name' class='contact-inputs' required />
            <input type='email' name='email' placeholder='Email' class='contact-inputs' required />
            <textarea name='message' placeholder='Comment' class='contact-inputs' required />
            <button type='submit'>Submit<img src={arrow} alt='' /></button>
          </div>
        </div>
      </div>


      <div className='direct-line-wrap'>

        <section>
          <h1>Reach us directly here</h1>
          <div className='email-wrap'>
            <i class="fa-solid fa-envelope" style={{ color: '#ea805d' }}></i>
            <p className='email'>Email <br />  <a href="mailto:Wizer@contact.us.au">Wizer@contact.us.au</a> </p>
          </div>
          <div className='phone-wrap'>
            <i class="fa-solid fa-phone" style={{ color: '#ea805d' }}></i>
            <p className='phone'>Phone <br />  <a href="tel:+61415269281">(+61) 415 269 281</a> </p>
          </div>
        </section>

        <iframe className='map' width="550" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=university%20drive,%20callaghan,%20NSW+(Wizer%20Co.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>



      </div>


      <div>
        <div className='ad-ct-title'>

          <p className='team-title'><i class="fa-solid fa-headset" style={{ color: '#d67a3d' }}></i>OUR SUPPORT TEAM<i class="fa-solid fa-headset" style={{ color: '#d67a3d' }}></i></p>
          <h1>Talk to real people</h1>
          <p className='team-desc'>Connect with our friendly support team and get assistance from real people,
            ready to help you with any questions or concerns. We're here to provide personalized,
            prompt support every step of the way</p>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div className='contact-us-card-container'>
          <div className='cards-wrap'>
            <CardItem
              src={adoria}
              text='Adoria Duong'
              description='Contact '
              path='https://www.linkedin.com/in/thi-bao-ngoc-duong-5947491b7/'
            />
            <CardItem
              src={elias}
              text='Elias Luong'
              description='Contact '
              path='https://www.linkedin.com/in/hai-dang-luong-7a93a6134/'
            />
          </div>


          <div className='cards-wrap'>
            <CardItem
              src={img1}
              text='Gemma Nguyen'
              description='Contact '
              path='https://www.linkedin.com/in/thi-bao-ngoc-duong-5947491b7/'
            />
            <CardItem
              src={img1}
              text='Danny Aburto'
              description='Contact '
              path='https://www.linkedin.com/in/thi-bao-ngoc-duong-5947491b7/'
            />
            <CardItem
              src={img1}
              text='Quang Hoang'
              description='Contact'
              path='https://www.linkedin.com/in/thi-bao-ngoc-duong-5947491b7/'
            />


          </div>
        </div>

      </div>


    </div>
  )
}

export default ContactUs
