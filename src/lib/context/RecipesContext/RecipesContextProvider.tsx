//RecipesContextProvider.tsx
import { useEffect, useState } from "react";
import { movies } from "../../../components/Recipes/data/movies";

import _orderBy from "lodash/orderBy"
import { FormDataType } from "../../../components/RecipeForm/RecipeForm";
import { randomId } from "../../helpers/randomId";
import { RecipeInterface } from "../../../components/Recipes/RecipeCard";
import { allRecipes } from "../../../api/Recipes/recipes.client";
import { RecipeRespnseType } from "../../../api/Recipes/recipes.types";
import { RecipesContext } from "./RecipesContext";


interface Props {
  children: React.ReactNode;
} 
const sortRecipes = (recipes: any) => _orderBy(recipes, ["featured", "title"], ["desc", "asc"]);

const RecipesContextProvider = ({ children }: Props) => {
  const [recipes, setRecipes] = useState<RecipeRespnseType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [selectedRecipe, setSelectedRecipe] = useState<RecipeRespnseType | undefined>();
  
  useEffect(() => {
    setLoading(true);
    allRecipes().then(response => {
      setRecipes(response.data.recipes)
    }).catch(err => {
      console.log(err)
      setError(err?.message ?? 'Something went wrong')
    }).finally(() => {
      setLoading(false)
    })
  }, [])
  const selectRecipe = (id: string) => {
    setSelectedRecipe(recipes.find(recipe => recipe._id === id));
  }

  const addNewRecipe = (form: FormDataType) => {
    setRecipes(sortRecipes([...recipes, { ...form, _id: randomId(), im: "https://placehold.co/600x400/EEE/31343C" }]))
  }

 

  const handleClick = (id: string) => {
    setRecipes(
      sortRecipes(recipes.map((recipe) => (recipe._id === id ? { ...recipe, featured: !recipe.featured } : recipe)))
    )
  }

  const updateRecipe = (id: string, form: FormDataType) => {
    setRecipes(sortRecipes(recipes.map(recipe => recipe._id === id ? {...recipe, ...form} : recipe)))
    
  }
  
  const deleteRecipe = (id: string) => {
    setRecipes(recipes.filter(recipe => recipe._id !== id))
  }


  return (
    <RecipesContext.Provider
      value={{
        recipes,
        addNewRecipe,
        updateRecipe,
        deleteRecipe,
        selectRecipe,
        toggleFeatured: handleClick,
      }}
    >

    {error ? error : loading ? <div>loading ...</div> : children}
    </RecipesContext.Provider>
  )
}

export default RecipesContextProvider;
