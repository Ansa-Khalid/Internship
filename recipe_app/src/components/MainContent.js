import React, { useState, useEffect } from 'react';

const MainContent = ({ searchQuery }) => {
  const [recipesFound, setRecipesFound] = useState(false);

  // Placeholder for the fetchRecipes function
  const fetchRecipes = async () => {
    // Simulate that recipes were found
    setRecipesFound(true);
  };

  useEffect(() => {
    if (searchQuery) {
      fetchRecipes();
    }
  }, [searchQuery]);

  return (
    <div>
      <section>
        <div className="recipe-container">
          {recipesFound ? null : (
            <h2>Search your favourite Recipes...</h2>
          )}
        </div>
        <div className="recipe-details">
          <button type="button" className="recipe-close-btn">
            <i className="fas fa-times"></i>
          </button>
          <div className="recipe-details-content"></div>
        </div>
      </section>
    </div>
  );
};

export default MainContent;
