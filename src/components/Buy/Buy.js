import React from 'react';

import Card from '../Card/Card';

function Buy({ products }) {
    
    return (
        <section className='buy'>
            <div className="buy-cards">
                {
                    products.map((product, index) => (
                        <Card 
                            key={index}
                            img={product.img}
                            text={product.name}
                            price={product.price}
                            country={product.country}
                            showExtraDiv={true}
                            styles={{
                                border: '1px solid rgba(0, 0, 0, 0.2)',
                                marginBottom: '30px',
                                minHeight: '260px',
                                boxShadow: '0px 0px 16px -2px #000000'
                            }}
                        />
                    ))
                }
            </div>
        </section> 
    );
}

export default Buy;