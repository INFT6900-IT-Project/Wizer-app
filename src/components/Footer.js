import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>

      <section className='footer-subscription'>
        <p className='call-to-action'>Join the newsletter to receive our new deals</p>
        <div>
          <form>
            <input className='footer-input' name="email" type="email" placeholder='Type your email'/>
            <Button buttonStyle='btn-outline'>Subscribe</Button>
          </form>
        </div>
      </section>


      <div className='footer-links'>
        <div className='footer-link-wrap'>
          <div className='column-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How Wizer works</Link>
            <Link to='/sign-up'>Testimonials</Link>
            <Link to='/sign-up'>Prinacy Policy</Link>
            <Link to='/sign-up'>Terms of Services</Link>
          </div>

          <div className='column-link-items'>
            <h2>Contact Us</h2>
            <Link to='/sign-up'>Support</Link>
            <Link to='/sign-up'>FAQs</Link>
            <Link to='/sign-up'>Contact</Link>
            <Link to='/sign-up'>Feedback</Link>
          </div>

          <div className='column-link-items'>
            <h2>Social Media</h2>
            <Link to='/sign-up'>Facebook</Link>
            <Link to='/sign-up'>Youtube</Link>
            <Link to='/sign-up'>Instagram</Link>
            <Link to='/sign-up'>Twitter</Link>
          </div>

          <div className='column-link-items'>
            <h2>Others</h2>
            <Link to='/sign-up'>Features</Link>
            <Link to='/sign-up'>Pricing</Link>
            <Link to='/sign-up'>Tutorials</Link>
            <Link to='/sign-up'>Partnerships</Link>
          </div>
        </div>
      </div>

      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
          WIZER      
          <i class="fa-solid fa-splotch"></i>
          </div>
        </div>
        <small class='website-rights'>WIZER © 2024</small>
        <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </Link>
            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
      </section>

    </div>
  )
}

export default Footer
