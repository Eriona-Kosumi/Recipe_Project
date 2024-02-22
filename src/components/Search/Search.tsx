// Search.tsx
import React, { useState } from "react";
import { useRecipesContext } from "../../lib/context/RecipesContext/RecipesContext";
import RecipeCard from "../Recipes/RecipeCard";

const Search = () => {
  const { recipes } = useRecipesContext();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{paddingBottom:"10rem"}} >


      <div className="!mt-2 grid grid-cols-4 gap-8">
        {filteredRecipes.length !== 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard recipe={recipe} key={recipe._id} />
          ))
        ) : (
          <div className="ui icon message">
            <i className="blue icon info" />
            <div className="content">
              <div className="header">No recipes found</div>
            </div>
          </div>
        )}
      </div>
      <br />
   </div>
  );
};

export default Search;
