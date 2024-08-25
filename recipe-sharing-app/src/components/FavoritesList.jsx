import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const FavoritesList = () => {
  const { recipes, favorites, removeFavorite } = useRecipeStore();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favoriteRecipes.length === 0 ? (
        <p>You haven't added any favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
            <button onClick={() => removeFavorite(recipe.id)}>Remove from Favorites</button>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;