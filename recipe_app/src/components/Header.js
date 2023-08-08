import React, { useState } from 'react';
import logo from '../logo.png'; 

const Header = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') {
      setSearchQuery(null); // Clear the searchQuery state in the App component
    } else {
      setSearchQuery(inputValue); // Update the searchQuery state in the App component
    }
  };

  return (
    <div>
      <header>
        <nav>
          <h1>Recipe App</h1>
          <img src={logo} alt="" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search for recipes..."
              className="searchBox"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="searchBtn">
              Search
            </button>
          </form>
        </nav>
      </header>
    </div>
  );
};

export default Header;
