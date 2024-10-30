import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
const NavBar = () => {
    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };
    return (
        <nav className="navbar">
             <div className="navbar-title">
            <h1 className="navbar-brand">Memory Game</h1>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-button">Home</Link>
                <Link to="/game" className="navbar-button">Game</Link>
                <button onClick={toggleFullScreen} className='btn btn-info mb-4'>FullScreen</button>
            </div>
        </nav>
    );
};

export default NavBar;