import React, { useState } from 'react';
import './SearchBar.css'; // Import the CSS file

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search restaurants..."
        value={query}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
