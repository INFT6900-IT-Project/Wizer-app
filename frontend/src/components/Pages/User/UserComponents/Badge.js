import React from 'react';
import './Badge.css';

function Badge(props) {
  return (
    <div>
      <li className='ad-badge-wrap'>
        <div className='ad-badge'> 
            <figure className='ad-badge-img'><img src ={props.src} /></figure>
            </div>
        <div className='ad-badge-text'>
        <h3>{props.badge_name}</h3>
        
        </div>
        
        
      </li>
    </div>
  )
}

export default Badge
