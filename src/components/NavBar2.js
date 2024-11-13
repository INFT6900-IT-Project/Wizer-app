import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from './Button';
import './Navbar.css';
import verifyToken from '../api/verifyToken';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        } else {
            setButton(true)
        }
    };

    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);




  return (
    <>
    <nav className="navbar">
        <div className="navbar-container">
            
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Wizer      
            <i class="fa-solid fa-splotch"></i>
            </Link>
            
                

            <div className='menu-icon' onClick={handleClick}>
                <i className={click? 'fas fa-times' : 'fas fa-bars'}/>
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
                        Courses
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/pricing' className='nav-links' onClick={closeMobileMenu}>
                        fdfdfdfd
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}>
                        Cffdfdfdfd
                    </Link>
                </li>
                <li>
                    
                     <Link to='/sign-out' className='nav-links-mobile' onClick={closeMobileMenu}>
                        dfdfd
                    </Link> 
                </li>
            </ul>
            {button && <Button link="/sign-out" buttonStyle='btn--outline'>Sign Out</Button>}
            
        </div>
    </nav>

    </>
  )
}

export default Navbar
