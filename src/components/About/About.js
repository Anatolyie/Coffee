import React from 'react';

import { ReactComponent as MySvgDoubleCoffe2 } from '../../assets/img/coffee-beans-2.svg';

function About({ title, text }) {
    return (
        <section className='about'>
            <h2 className='about-title'>{title}</h2>
            <div className="about-img">
                {/* <img src={imgS} alt="coffee-img" /> */}
                <MySvgDoubleCoffe2/>
            </div>
            <div className="about-descr">{text}</div>
        </section>
    );
}

export default About;