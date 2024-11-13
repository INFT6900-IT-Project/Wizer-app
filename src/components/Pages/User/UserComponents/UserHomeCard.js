import React from 'react';
import './UserHomeCard.css'

function UserHomeCard(props) {
  return (
    <div>
      <li className='ad-user-card-item'>
        <a className='ad-card-item-link' href={props.path}>
            <figure className='ad-card-item-content'>
                <img
                src={props.src}
                alt='course'
                />
            </figure>
            <p>{props.teacher}</p>
            <h5>{props.text}</h5>
            <p1> {/*use <span> to make the duration and student appear in the same row in card */}
                <span>
                <i class="fa-solid fa-clock" style={{color: '#7190c6'}}/>
                {props.duration}</span> 
                <span>
                <i class="fa-solid fa-user-group" style={{color: '#7190c6'}}/>
                {props.student}
                </span>
            </p1>
            <p2 className='ad-card-underline'/>
            <p3>
                <span>{props.price}</span>
            {props.newPrice}</p3>
        </a>
      </li>
    </div>
  )
}

export default UserHomeCard
