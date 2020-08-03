import React from 'react';
import './search-box.css';

export const SearchBox = (props) => {
    return <input 
                className='search'
                type='search'
                placeholder='search monsters'
                onChange={e => props.searchField = e.target.value }
           />
}