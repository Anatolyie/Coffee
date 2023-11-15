import React from 'react';

import imgCoffe from '../../assets/img/double-coffee-min.png'

function Card({ img, text, price }) {
    return (
        <div className='card'>
            <div className="card-img">
                <img src={imgCoffe} alt="" />
            </div>
            <div className="card-text">{text}</div>
            <div className="card-price">{price}$</div>
        </div>
    );
}

export default Card;