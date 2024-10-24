import React from 'react';

const NavBar = () => {
    const navbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue', // Background color of the navbar
        padding: '20px', // Space around the content
        width: '100vw', // Full viewport width
        position: 'fixed', // Fixed position at the top
        top: 0, // Position it at the top of the viewport
        left: 0, // Align it to the left
        zIndex: 1000, // Ensure it is above other content
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', // Shadow for depth
    };

    const titleStyle = {
        color: 'rgb(228, 245, 131)', // Text color
        fontSize: '2em', // Font size
        margin: 0, // Remove default margin
        textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Shadow for text
        alignItems: 'center',
    };

    return (
        <nav style={navbarStyle}>
            <h1 style={titleStyle}>Memory Game</h1>
        </nav>
    );
};

export default NavBar;
