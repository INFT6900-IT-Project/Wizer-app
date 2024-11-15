import React, { useState } from 'react';
import styles from './Dropdown.module.css'; 

const Dropdown = ({ onEdit, onHide, onDelete, showEdit, showDelete }) => {
    const [isOpen, setIsOpen] = useState(false);

  
    const toggleDropdown = () => {
        setIsOpen((prevState) => !prevState);
    };

    return (
        <div className={styles.container}>
            <button
                onClick={toggleDropdown}
                className={styles.button}
                type="button"
                aria-expanded={isOpen} 
                aria-haspopup="true"
                aria-label="Dropdown menu"
            >
                <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 4 15"
                >
                    <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className={styles.menu} role="menu">
                    <ul>
                        {showEdit && (
                            <li>
                                <button
                                    onClick={() => {
                                        onEdit();
                                        setIsOpen(false); 
                                    }}
                                    className={styles.menuItem}
                                    role="menuitem"
                                    type="button"
                                >
                                    Edit
                                </button>
                            </li>
                        )}
                        {showDelete && (
                            <li>
                                <button
                                    onClick={() => {
                                        onDelete();
                                        setIsOpen(false); 
                                    }}
                                    className={styles.menuItem}
                                    role="menuitem"
                                    type="button"
                                >
                                    Delete
                                </button>
                            </li>
                        )}
                        <li>
                            <button
                                onClick={() => {
                                    onHide();
                                    setIsOpen(false); 
                                }}
                                className={styles.menuItem}
                                role="menuitem"
                                type="button"
                            >
                                Hide
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Dropdown;
