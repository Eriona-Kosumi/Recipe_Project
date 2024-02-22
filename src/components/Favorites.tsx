// FeaturedRecipesPage.tsx
import React from "react";
import RecipeCard from "./Recipes/RecipeCard";
import { useRecipesContext } from "../lib/context/RecipesContext/RecipesContext";
import Search from "./Search/Search";


export const Favorites = () => {
  const { recipes } = useRecipesContext();

  // Filter recipes to include only those that are featured
  const favoriteRecipes = recipes.filter((recipe) => recipe.featured);

  return (
    <div >
        <h1 style={{fontSize:30, fontWeight:1000}}>Favorite recipes</h1>
      <div className="mt-10 mb-44 grid grid-cols-4 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
       
        {favoriteRecipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
