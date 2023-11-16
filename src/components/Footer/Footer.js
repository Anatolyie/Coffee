import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MySvgDoubleCoffe } from '../../assets/img/coffee-beans.svg';
import { ReactComponent as MySvgDoubleCoffe2 } from '../../assets/img/coffee-beans-2.svg'; 

import Navigation from '../Navigation/Navigation';



function Footer() {
    return (
        <footer className='footer'>
            <Link to="/">
                <MySvgDoubleCoffe className="footer-svg" fill="black"/>
            </Link>
            <Navigation/>
            <MySvgDoubleCoffe2 className="footer-svg__absolute" fill="black"/>
        </footer>
    );
}

export default Footer;