import React from 'react';
import './CardItem.css'

function CardItem(props) {
  return (
    <div>
      <li className='card-item'>
        <a className='card-item-link' href={props.path}>
            <figure className='card-item-pic-wrap'>
                <img
                src={props.src}
                alt='Member'
                />
            </figure>
            <h5>{props.text}</h5>
            <p>{props.description}<i class="fa-solid fa-angle-right"></i></p>
        </a>
      </li>
    </div>
  )
}

export default CardItem
