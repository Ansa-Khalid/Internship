import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';
import RecipeComponent from './components/RecipeComponent';
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState(null);

  return (
    <div className="App">
      <Header setSearchQuery={setSearchQuery} />
      <MainContent searchQuery={searchQuery} />
      {searchQuery && <RecipeComponent searchQuery={searchQuery} />}
    </div>
  );
}

export default App;
