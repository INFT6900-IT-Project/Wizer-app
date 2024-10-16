import React from 'react';
import './ContactUs.css';
import arrow from '../../ImageVideo/arrow_icon.png';
import msg from '../../ImageVideo/msg.png';
import Footer from '../Footer';

function ContactUs() {
  return (
    <div>
        <div className='contact-us'>
        
       
        <h1>Contact Us</h1>
        <hr color='#ea6d43'/>
        
        <p>Already use Wizer? <a href='sign-in'>Sign in</a> so we can tailor your
        support experience! <br/>Otherwise, feel free to reach any of us for
        further details on this journey to make the best use of it!
        </p>

        <div className='wrap'>
        <div className='left'>
            <img src={msg} alt=''/>
        </div>

        <div className='right'>
        <input type='text' name='name' placeholder='Name' class='contact-inputs' required/>
        <input type='email' name='email' placeholder='Email' class='contact-inputs' required/>
        <textarea name='message' placeholder='Comment' class='contact-inputs' required/>
        <button type='submit'>Submit<img src={arrow} alt=''/></button>
        </div>
        </div>
        </div>


        <div className='direct-line-wrap'>

        <section>
        <h1>Reach us directly here</h1>
        <div className='email-wrap'>
        <i class="fa-solid fa-envelope" style={{color: '#ea805d'}}></i>
         <p className='email'>Email <br/>  <a href="mailto:Wizer@contact.us.au">Wizer@contact.us.au</a> </p>
        </div>
        <div className='phone-wrap'>
        <i class="fa-solid fa-phone" style={{color: '#ea805d'}}></i>
         <p className='phone'>Phone <br/>  <a href="tel:+61415269281">(+61) 415 269 281</a> </p>
        </div>
        </section>
        
          <iframe className='map' width="550" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=university%20drive,%20callaghan,%20NSW+(Wizer%20Co.)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
         

        
        </div>



    <Footer/>
    </div>
  )
}

export default ContactUs
