import React from 'react';
import './search-box.css';

export const SearchBox = () => {
    return <input type='search'
          placeholder='search monsters'
          onChange={e => this.setState({ searchField: e.target.value })}
         />
}