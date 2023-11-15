import React from 'react';

import Promo from '../components/Promo/Promo';
import About from '../components/About/About';
import Best from '../components/Best';

function Home() {
    const backgroundStyles = {
        background: `url(${require("../assets/img/Main-bg.jpg")}) center center / cover no-repeat`,
    };

    return (
       <>
            <div className='promo' style={backgroundStyles}>
                <Promo/>
            </div>
            <About title={'About Us'} text={'some text'}/>
            <Best/>
       </>
    );
}

export default Home;