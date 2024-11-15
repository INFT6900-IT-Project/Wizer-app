import React from 'react';
import './UserCertificate.css'

function UserCertificate(props) {
    return (
        <div>
            <li className='ad-certi-item'>
                <a className='ad-certi-item-link' href={props.path}>
                    <figure className='ad-certi-item-content'>
                        <img
                            src={props.src}
                            alt='course'
                        />
                    </figure>
                    <p>{props.teacher}</p>
                    <h5>{props.text}</h5>
                    <p1>
                        <i class="fa-solid fa-window-maximize" style={{ color: '#7190c6' }} />
                        Build toward a degree

                    </p1>
                    <div>
                        <p className='ad-user-certi-footer'>
                            <span>Professional Certificate</span>

                            <span><i class="fa-solid fa-circle-right"></i></span>
                        </p>
                    </div>

                </a>

            </li>
        </div>
    )
}

export default UserCertificate
