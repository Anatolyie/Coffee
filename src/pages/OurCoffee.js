import React from 'react';

import About from '../components/About/About';
import Buy from '../components/Buy/Buy';
import Filter from '../components/Filter/Filter';


function OurCoffee({ coffeeBuy }) {
    const aboutText = [
        "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
        "Afraid at highly months do things on at. Situation recommend objection do intention so questions.",
        "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.",
        "Children me laughing we prospect answered followed. At it went is song that held help face."
      ];

    const backgroundStyles = {
        background: `url(${require("../assets/img/Main-bg3.jpg")}) center center / cover no-repeat`,
    };

    return (
        <>
            <div className='promo promo-ourcoffee' style={backgroundStyles}>
            <h1>Our Coffee</h1>
            </div>
            <div className="about-ourcoffee">
                <div className="about-ourcoffee__img">
                    <img src={`${require("../assets/img/coupe-coffee-min.png")}`} alt="coffee" />
                </div>
                <About title={'About our beans'} text={aboutText} lines={true}/>
            </div>
            <hr />
            <Filter/>
            <Buy products={coffeeBuy}/>
        </>

    );
}

export default OurCoffee;