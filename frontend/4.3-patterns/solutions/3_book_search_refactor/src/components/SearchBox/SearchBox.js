import React from 'react';
import './SearchBox.css';

const SearchBox = props => (
  <div className="SearchBox">
    <input
      placeholder="Type a book title..."
      onChange={props.onQueryChange}
      value={props.query}
    />
    <button onClick={props.onSearch}>Search</button>
  </div>
);

export default SearchBox;
