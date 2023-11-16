import React from 'react';

import Card from '../Card/Card';

function Best({ products }) {
    return (
        <section className='best'>
            <h2 className='best-title'>Our Best</h2>
            <div className="best-cards">
                {
                    products.map((product, index) => (
                        <Card 
                            key={index}
                            img={product.img}
                            text={product.name}
                            price={product.price}
                        />
                    ))
                }
            </div>
        </section> 
    );
}

export default Best;