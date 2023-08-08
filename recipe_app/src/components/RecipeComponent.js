import React, { useState, useEffect } from 'react';

const RecipeComponent = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [error, setError] = useState(null); // Initialize error to null

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setError(null);
  
        // Check if searchQuery is empty
        if (!searchQuery) {
          setLoading(false);
          return;
        }
  
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`);
        const data = await response.json();
        setRecipes(data.meals || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Error fetching recipes. Please try again later.');
        setLoading(false);
      }
    };
  
    // Only fetch recipes if searchQuery is not empty
    if (searchQuery) {
      fetchRecipes();
    }
  }, [searchQuery]);
  const closeRecipePopup = () => {
    setSelectedRecipe(null);
  };

  const openRecipePopup = async (meal) => {
    try {
      console.log(meal);
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredients.push(meal[`strIngredient${i}`]);
        }
      }
      setSelectedRecipe({ ...meal, ingredients });
    } catch (error) {
      console.error('Error fetching recipe details:', error);
    }
  };

  return (
    <div className='recipe-container'>
      {error ? (
        <h2>{error}</h2>
      ) : loading ? (
        <h2>Fetching Recipes...</h2>
      ) : recipes.length === 0 ? (
        <h2>No recipes found. Please try a different search.</h2>
      ) : (
        recipes.map((meal) => (
          <div key={meal.idMeal} className="recipe">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h3>{meal.strMeal}</h3>
            <p>
              <span>{meal.strArea}</span> Dish
            </p>
            <p>
              Belongs to <span>{meal.strCategory} Category</span>
            </p>
            <button onClick={() => openRecipePopup(meal)}>View Recipe</button>
          </div>
        ))
      )}

      {selectedRecipe && (
        <div className="recipe-details" style={{ display: selectedRecipe ? 'block' : 'none' }}>
          <div className="recipePopup">
            <button type="button" className="recipe-close-btn" onClick={closeRecipePopup}>
              <i className="fas fa-times"></i>
            </button>
            <div className="recipeDetailsContent" >
              <h2 className="recipeName">{selectedRecipe.strMeal}</h2>
              <h3>Ingredients:</h3>
              <ul className="ingredientList">
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
              <div className="recipeInstructions">
                <h3>Instruction</h3>
                <p>{selectedRecipe.strInstructions}</p>
              </div>
              <div className="recipeLink">
                <div className="recipe-meal-img">
                  <img src={selectedRecipe.strMealThumb} alt="" />
                </div>
                <a href={selectedRecipe.strYoutube} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeComponent;
