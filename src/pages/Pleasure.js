// import React from 'react';

// import About from '../components/About/About';
// import Buy from '../components/Buy/Buy';


// function OurCoffee({ coffeeBuy }) {
//     const aboutText = [
//         "Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.",
//         "Afraid at highly months do things on at. Situation recommend objection do intention so questions.",
//         "As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.",
//         "Children me laughing we prospect answered followed. At it went is song that held help face."
//       ];

//     const backgroundStyles = {
//         background: `url(${require("../assets/img/Main-bg3.jpg")}) center center / cover no-repeat`,
//     };

//     return (
//         <>
//             <div className='promo promo-ourcoffee' style={backgroundStyles}>
//             <h1>Our Coffee</h1>
//             </div>
//             <div className="about-ourcoffee">
//                 <div className="about-ourcoffee__img">
//                     <img src={`${require("../assets/img/coupe-coffee-min.png")}`} alt="coffee" />
//                 </div>
//                 <About title={'About our beans'} text={aboutText}/>
//             </div>
//             <hr />
//             <Buy products={coffeeBuy}/>
//         </>

//     );
// }

// export default OurCoffee;

import React from 'react';

import About from '../components/About/About';
import Buy from '../components/Buy/Buy';


function Pleasure({ coffeeBuy }) {
    const aboutText = [
        'Profound kindness in challenging conduct she displayed. Upon the departure of an abominable landlord.',
        'Filled with trepidation for many months, performing actions with the highest apprehension. Circumstance suggests an opposition and a purpose.',
        'Considerably distant, expressing satisfaction in advancement. Ultimately inquired about his distant disposition, encountering a reserved desire.'
      ];

    const backgroundStyles = {
        background: `url(${require("../assets/img/Main-bg2.jpg")}) center center / cover no-repeat`,
    };

    return (
        <>
            <div className='promo promo-ourcoffee' style={backgroundStyles}>
            <h1>For your pleasure</h1>
            </div>
            <div className="about-ourcoffee">
                <div className="about-ourcoffee__img">
                    <img src={`${require("../assets/img/drink-coffee-min.png")}`} alt="coffee" />
                </div>
                <About title={'About our goods'} text={aboutText}/>
            </div>
            <hr />
            <Buy products={coffeeBuy}/>
        </>

    );
}

export default Pleasure;
