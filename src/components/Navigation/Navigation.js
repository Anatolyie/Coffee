import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {

    return (
        <nav className='nav'>
            <ul className='nav-list'>
                <li>
                    <Link to="/">Coffee House</Link>
                </li>
                <li>
                    <Link to="/ourcoffee">Our Coffee</Link>
                </li>
                <li>
                    <Link to="/pleasure">For Your Pleasure</Link>
                </li>
                
            </ul>
        </nav>
    );
}

export default Navigation;