//Featured.tsx
import React from "react";
import { useState } from "react";
import { useRecipesContext } from "../../lib/context/RecipesContext/RecipesContext";
import { editRecipe } from "../../api/Recipes/recipes.client";
import { log } from "console";

interface Props{
  featured: boolean;
  id: string;
  
}

const Featured = ({featured, id}: Props) => {
  const {recipes, toggleFeatured} = useRecipesContext()
const handleFeatured=()=>{
  const recipeData=recipes.find(recipe=>recipe._id===id);

  if(!recipeData){
    throw Error('No recipe found')
  }

  editRecipe(
    id,
    {
      ...recipeData,
      featured: !featured
    }
    ).then(() =>{
      toggleFeatured(id)

    })
  

}

  return (
    <span onClick={handleFeatured} className="ui right corner label">
      <i className={`like icon ${featured ? 'red' : 'empty'}`} />
    </span>
  )
}

export default Featured
