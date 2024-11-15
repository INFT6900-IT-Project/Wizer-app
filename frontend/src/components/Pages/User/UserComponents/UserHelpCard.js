import React from 'react';
import './UserHelpCard.css'
import { Link } from 'react-router-dom';

function UserHelpCard(props) {
  return (
    <div>
      <div className='ad-help-card'>
              <Link href='' style={{ textDecoration: 'none' }} className='ad-help-card-btn'>
                <p1>{props.icon}</p1>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
              </Link>
            </div>
    </div>
  )
}

export default UserHelpCard
