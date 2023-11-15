import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as MySvgDoubleCoffe } from '../../assets/img/coffee-beans.svg';

import Navigation from '../Navigation/Navigation';


function Header(props) {
    return (
       <header className='header'>
            <div className='container header-flex'>
                <Link to="/">
                    <MySvgDoubleCoffe/>
                </Link>
                <Navigation/>
            </div>
       </header>
    );
}

export default Header;