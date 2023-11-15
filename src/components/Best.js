import React from 'react';

import Card from './Card/Card';

function Best(props) {
    return (
        <section className='best'>
            <h2 className='best-title'>Our Best</h2>
            <div className="best-cards">
                <Card text={'Solimo Coffee Beans 2 kg'} price={'10'}/>
                <Card/>
                <Card/>
            </div>
        </section>
    );
}

export default Best;