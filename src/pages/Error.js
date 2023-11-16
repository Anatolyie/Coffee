import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
    return (
        <div className='error'>
            Error 404 - Choose a valid address
            <br />
            <Link to="/">
            <button className='error-btn'>Back</button>
            </Link>
        </div>
    );
}

export default Error;