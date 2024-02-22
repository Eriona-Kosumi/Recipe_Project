//Home.tsx
import RecipeCard from "../../components/Recipes/RecipeCard";
import { RecipeInterface } from "../../components/Recipes/RecipeCard";
import _sortBy from "lodash/sortBy";
import _orderBy from "lodash/orderBy";

import { movies } from "../../components/Recipes/data/movies";

import { useState } from "react";
import RecipesContextProvider from "../../lib/context/RecipesContext/RecipesContextProvider";
import RecipeForm from "../../components/RecipeForm/RecipeForm";
import RecipesList from "../../components/Recipes/RecipesList";
import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";

import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import Button from "../../components/shared/Button/Button";
import Favorites from "../../components/Favorites";





export const FavoriteRecipes = () => {
  
  return (
    <div >
   
    <RecipesContextProvider>
      <div className="   ml-44 mr-44 grid grid-col-4 gap-2">
       
     
       
        <br />
        <Favorites />
      </div>
    </RecipesContextProvider>
  </div>);
};
export default FavoriteRecipes

 