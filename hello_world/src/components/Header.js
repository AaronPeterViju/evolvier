import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <h1>My React App</h1>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/form">Form</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;