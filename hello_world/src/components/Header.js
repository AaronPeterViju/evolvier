import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return(
        <header className="header">
            <h1>Blogger</h1>
            <nav className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/form">Create New Blog</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;