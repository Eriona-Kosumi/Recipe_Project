//RecipesContext.ts
import React, { useContext } from "react";
import { FormDataType } from "../../../components/RecipeForm/RecipeForm";
import { RecipeInterface } from "../../../components/Recipes/RecipeCard";
import { AddRecipeRequest, RecipeRespnseType } from "../../../api/Recipes/recipes.types";

interface RecipeContextType {
  recipes: RecipeRespnseType[];
  addNewRecipe: (form: AddRecipeRequest) => void;
  updateRecipe: (id: string, form: FormDataType) => void;
  deleteRecipe: (id: string) => void;
  selectedRecipe?: RecipeRespnseType;
  selectRecipe: (id: string) => void;
  toggleFeatured: (id: string) => void;
}

const values = {
  recipes: [],
  addNewRecipe: () => {},
  updateRecipe: () => {},
  deleteRecipe: (id: string) => {},
  selectedRecipe: undefined,
  selectRecipe: (id: string) => {},
  toggleFeatured: (id: string) => {},
};

export const RecipesContext = React.createContext<RecipeContextType>(values);

export const useRecipesContext = () => useContext(RecipesContext);
