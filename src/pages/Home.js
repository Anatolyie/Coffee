import React from 'react';

import Promo from '../components/Promo/Promo';
import About from '../components/About/About';
import Best from '../components/Best/Best';

function Home({ coffeeData }) {
    const aboutText = [
        "Extremity sweetness difficult behaviour he of.",
        "On disposal of as landlord horrible.",
        "Afraid at highly months do things on at.",
        "Situation recommend objection do intention so questions.",
        "As greatly removed calling pleased improve an.",
        "Last ask him cold feel met spot shy want.",
        "Children me laughing we prospect answered followed.",
        "At it went is song that held help face.",
        "Now residence dashwoods she excellent you.",
        "Shade being under his bed her, Much read on as draw.",
        "Blessing for ignorant exercise any yourself unpacked.",
        "Pleasant horrible but confined day end marriage.",
        "Eagerness furniture set preserved far recommend.",
        "Did even but nor are most gave hope.",
        "Secure active living depend son repair day ladies now."
    ]


    const backgroundStyles = {
        background: `url(${require("../assets/img/Main-bg.jpg")}) center center / cover no-repeat`,
    };

    return (
       <>
            <div className='promo' style={backgroundStyles}>
                <Promo/>
            </div>
            <About text={aboutText} title={'About Us'} lines={false}/>
            <Best products={coffeeData} />
       </>
    );
}

export default Home;