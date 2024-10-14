import React from 'react';
import './ContactUs.css';
import arrow from '../ImageVideo/arrow_icon.png';
import msg from '../ImageVideo/msg.png';

function ContactUs() {
  return (
    <div>
        <div className='contact-us'>
        
       
        <h1>Contact Us</h1>
        <hr  color="white" size="1" />
        
        <p>Already use Wizer? <a href='sign-in'>Sign In</a> so we can tailor your
        support experience. <br/>Otherwise, feel free to reach any of us for
        further details on this journey to make the best use of it!
        </p>

        <div className='wrap'>
        <div className='left'>
            <img src={msg} alt=''/>
        </div>

        <div className='right'>
        <input type='text' name='name' placeholder='Your Name' class='contact-inputs' required/>
        <input type='email' name='email' placeholder='Your Email' class='contact-inputs' required/>
        <textarea name='message' placeholder='Your Message' class='contact-inputs' required/>
        <button type='submit'>Submit<img src={arrow} alt=''/></button>
        </div>
        </div>
        
        
        </div>

    
    </div>
  )
}

export default ContactUs
