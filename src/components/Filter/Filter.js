import React from 'react';

function Filter() {
    return (
        <div className='filter'> 
            <label className='filter-input'>
                Lookiing for
                <input type="text" placeholder='start typing here...'/>
            </label>
            <label className='filter-btn'>
                Or filter
                <button className="filter-btn__country">brazil</button>
                <button className="filter-btn__country">Kenya</button>
                <button className="filter-btn__country">Columbia</button>
            </label>
        </div>
    );
}

export default Filter;