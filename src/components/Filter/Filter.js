import React, { useState } from 'react';

function Filter({ onCountrySelect, onSearchTextChange }) {
    const [country] = useState(['Brazil', 'Kenya', 'Columbia']);
    const [searchText, setSearchText] = useState('');

    const handleCountryClick = (selectedCountry) => {
        onCountrySelect(selectedCountry);
        setSearchText(''); 
        onSearchTextChange('');
    };

    const handleSearchInputChange = (event) => {
        const text = event.target.value;
        setSearchText(text);
        onSearchTextChange(text);
    };

    return (
        <div className='filter'> 
            <label className='filter-input'>
                Lookiing for
                <input 
                    type="text" 
                    placeholder='start typing here...'
                    value={searchText}
                    onChange={handleSearchInputChange}
/>
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