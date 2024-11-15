import './Button.css';
import { Link } from 'react-router-dom';
import SignOut from './Pages/SignUpIn/SignOut';
import { useState } from 'react';


const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({ 
    children, 
    type, 
    buttonStyle, 
    buttonSize, 
    link
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0]

    const [notificationVisible, setNotificationVisible] = useState(false);
    const handleSignOut = () => {
        setNotificationVisible(true); // Show full-screen notification

        // Optional: Hide the notification after a delay
        setTimeout(() => {
            setNotificationVisible(false);
        }, 3000); // Notification disappears after 3 seconds
    };


    
        
        return (
            <Link to={link} className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                type={type}>
                    {children}
                </button>
                
            </Link>
    
            
        )
    
    
};
