import React from 'react';

import { ReactComponent as MySvgDoubleCoffe2 } from '../../assets/img/coffee-beans-2.svg';

import classes from "../../styles/about.module.scss"

function About({ title, text, lines = true }) {
    const line = lines ? `${classes.img}` : `${classes.imgSecond}`
    return (
        <section className='about'>
            <h2 className='about-title'>{title}</h2>
            <div className={line}
                >
                <MySvgDoubleCoffe2/>
            </div>
            <div className="about-descr">{text}</div>
        </section>
    );
}

export default About;