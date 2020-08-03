import React from 'react';
import './search-box.css';

export const SearchBox = () => {
    return <input 
                className='search'
                type='search'
                placeholder='search monsters'
                onChange={e => this.setState({ searchField: e.target.value })}
           />
}