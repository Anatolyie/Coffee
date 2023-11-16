import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link to="/" className='nav-list__link'>Coffee House</Link>
                </li>
                <li>
                    <Link to="/ourcoffee" className='nav-list__link'>Our Coffee</Link>
                </li>
                <li>
                    <Link to="/pleasure" className='nav-list__link'>For Your Pleasure</Link>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navigation;