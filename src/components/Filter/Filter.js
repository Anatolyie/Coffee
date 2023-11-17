import React, { useState } from 'react';

function Filter({ onCountrySelect }) {
    const [country, SetCountry] = useState(['Brazil', 'Kenya', 'Columbia']);

    const handleCountryClick = (selectedCountry) => {
        onCountrySelect(selectedCountry);
    };

    return (
        <div className='filter'> 
            <label className='filter-input'>
                Lookiing for
                <input 
                    type="text" 
                    placeholder='start typing here...'/>
            </label>
            <label className='filter-btn'>
                Or filter
                {
                    country.map(item => (
                        <button 
                            key={item} 
                            className="filter-btn__country"
                            onClick={() => handleCountryClick(item)}
                            >{item}</button>
                    ))
                }
            </label>
        </div>
    );
}

export default Filter;