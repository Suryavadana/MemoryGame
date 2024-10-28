import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './App.css'; // Ensure you import your CSS file

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the menu
    };

    return (
        <nav className="navbar">
            <h1 className="navbar-brand">Memory Game</h1>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            {isOpen && (
                <div className="navbar-links">
                    <Link to="/" className="navbar-button" onClick={toggleMenu}>Home</Link>
                    <Link to="/game" className="navbar-button" onClick={toggleMenu}>Game</Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
