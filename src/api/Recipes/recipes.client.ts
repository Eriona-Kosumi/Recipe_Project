//recipes.client.ts
import { apiRequest } from "../Api";
import {  AddRecipeRequest, RecipeRespnseType, RecipesRespnseType } from "./recipes.types";



//funksionet me endpointa edhe metoda
export const allRecipes = async () =>
  await apiRequest<{}, RecipesRespnseType>({
    url: "api/recipes",
  });

 
export const getRecipeById = async (recipeId:string) =>
await apiRequest<{}, {recipe: RecipeRespnseType}>({
  url: `api/recipes/${recipeId}`,
 
});


  export const createRecipe = async (recipe: AddRecipeRequest) =>
  await apiRequest<{ recipe: AddRecipeRequest }, { recipe: AddRecipeRequest }>({
    url: "api/recipes",
    method: "POST",
    data: { recipe },
  });

  export const editRecipe = async (id: string, recipe: AddRecipeRequest) =>
  await apiRequest<{ recipe: AddRecipeRequest }, { recipe: AddRecipeRequest }>({
    url: `api/recipes/${id}`,
    method: "PUT",
    data: { recipe },
  });

export const deleteRecipeApi = async (id: string) =>
  await apiRequest<{}, RecipesRespnseType>({
    url: `api/recipes/${id}`,
    method: "DELETE",
  });
