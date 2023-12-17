import React from 'react';
import "../style/Header.css"

const Header = () => {
    return (
        <div className='header'>
            <div className="logo">
                <h2><a href="#logo">👨‍💻Dev<span className='e'>Site</span></a></h2>
            </div>
            <div className="menu">
                <nav>
                    <a href="../App.js">Home</a>
                    <a href=".">About</a>
                    <a href=".">Office</a>
                    <a href=".">Contact</a>
                </nav>
            </div>
            <div className="connection">
                <a href=".">Sign in</a>
                <a href=".">Sign up</a>
            </div>
        </div>
    );
};

export default Header;