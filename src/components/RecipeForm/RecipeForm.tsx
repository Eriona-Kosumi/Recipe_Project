//RecipeForm.tsx
import React, { useEffect, useState } from "react";
import { useRecipesContext } from "../../lib/context/RecipesContext/RecipesContext";
import { validate } from "../../lib/helpers/validateRecipeForm";

import FormMessage from "./FormMessage";
import { AddRecipeRequest, RecipeRespnseType } from "../../api/Recipes/recipes.types";
import { createRecipe, editRecipe, getRecipeById } from "../../api/Recipes/recipes.client";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { response } from "express";

export interface FormDataType {
  title: string;
  ingredients: string;
  instructions: string;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: string;
  cuisine: string;
  caloriesPerServing: number;
  tags: string;
 
  img: string;
  rating: number;
 
  mealType: string;
  featured: boolean;

}

export interface ErrorFormDataType {
  title?: string;
  ingredients?: string;
  instructions?: string;
  prepTimeMinutes?: string;
  cookTimeMinutes?: string;
  servings?: string;
  difficulty?: string;
  cuisine?: string;
  caloriesPerServing?: string;
  tags?: string;
  
  img?: string;
  rating?: string;
  
  mealType?: string;
}

const RecipeForm = () => {
  const { recipeId } = useParams();

  const [formData, setFormData] = useState<AddRecipeRequest>({
    title: "",
    ingredients: "",
    instructions: "",
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: "",
    cuisine: "",
    caloriesPerServing: 0,
    tags: "",
    
    img: "",
    rating: 0,
    
    mealType: "",
    featured: false,
  })
  const navigate = useNavigate()
  //const location=useLocation()

  const [errors, setErrors] = useState<{ [key: string]: string }>();

  const { addNewRecipe, updateRecipe } = useRecipesContext();

  useEffect(() => {
    if (recipeId) {
      getRecipeById(recipeId).then((response) => {
        const { recipe } = response.data;
        setFormData(recipe);
      })
    }
  }, [])

  const handleStringInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((previousState: FormDataType) => ({
      ...previousState,
      [name]: value,
    }))
  }

  const handleNumberInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setFormData((previousState: FormDataType) => ({
      ...previousState,
      [name]: Number(value),
    }))
  }

  const handleBooleanInput = (event: React.FormEvent<HTMLInputElement>) => {
    const { name, checked } = event.currentTarget;
    setFormData((previousState: FormDataType) => ({
      ...previousState,
      [name]: checked,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    if (recipeId) {
      editRecipe(recipeId, formData)
        .then(res => {
          setErrors({})
          setFormData({
            title: "",
            ingredients: "",
            instructions: "",
            prepTimeMinutes: 0,
            cookTimeMinutes: 0,
            servings: 0,
            difficulty: "",
            cuisine: "",
            caloriesPerServing: 0,
            tags: "",
            
            img: "",
            rating: 0,
            
            mealType: "",
            featured: false,
          })
          updateRecipe(recipeId, res.data.recipe)
          navigate('/')
        }
        ).catch(err => setErrors(err?.response.data.errors))
    } else {
      createRecipe(formData).then((response) => {
          setErrors({})
          setFormData({
            title: "",
            ingredients: "",
            instructions: "",
            prepTimeMinutes: 0,
            cookTimeMinutes: 0,
            servings: 0,
            difficulty: "",
            cuisine: "",
            caloriesPerServing: 0,
            tags: "",
            
            img: "",
            rating: 0,
            
            mealType: "",
            featured: false,
          })
          addNewRecipe(response?.data?.recipe)
          navigate('/')
        })
        .catch(err => {
          console.log({ err });
          setErrors(err?.response.data.errors)
        })
    }
  }
  

  return (
    <form onSubmit={handleSubmit} className="ui form mb-6">
      <h1> {recipeId ? 'Update recipe' : 'Add new recipe'}</h1>
      <div className="field">
        <label>Recipe Title</label>
        <input
          onChange={handleStringInput}
          value={formData.title}
          type="text"
          name="title"
          id="title"
          placeholder="recipe title"
        />
        <FormMessage error={errors?.title} />
      </div>
      <div className="field">
        <label>Recipe Ingredients</label>
        <input
          onChange={handleStringInput}
          value={formData.ingredients}
          type="text"
          name="ingredients"
          id="ingredients"
          placeholder="recipe ingredients"
        />
        <FormMessage error={errors?.ingredients} />
      </div>
      <div className="field">
        <label>Recipe Instructions</label>
        <input
          onChange={handleStringInput}
          value={formData.instructions}
          type="text"
          name="instructions"
          id="instructions"
          placeholder="recipe instructions"
        />
        <FormMessage error={errors?.instructions} />
      </div>
      <div className="field">
        <label>Servings</label>
        <input
          onChange={handleNumberInput}
          value={formData.servings}
          type="number"
          name="servings"
          id="servings"
          placeholder="recipe servings"
        />
        <FormMessage error={errors?.servings} />
      </div>
      <div className="field">
        <label>Preperation Time</label>
        <input
          onChange={handleNumberInput}
          value={formData.prepTimeMinutes}
          type="number"
          name="prepTimeMinutes"
          id="prepTimeMinutes"
          placeholder="recipe prepTimeMinutes"
        />
        <FormMessage error={errors?.prepTimeMinutes} />
      </div>

      <div className="field">
        <label>Cook Time </label>
        <input
          onChange={handleNumberInput}
          value={formData.cookTimeMinutes}
          type="number"
          name="cookTimeMinutes"
          id="cookTimeMinutes"
          placeholder="recipe cookTimeMinutes"
        />
        <FormMessage error={errors?.cookTimeMinutes} />
      </div>
      <div className="field">
        <label>Recipe difficulty</label>
        <input
          onChange={handleStringInput}
          value={formData.difficulty}
          type="text"
          name="difficulty"
          id="difficulty"
          placeholder="recipe difficulty"
        />
        <FormMessage error={errors?.difficulty} />
      </div>
      <div className="field">
        <label>Recipe cuisine</label>
        <input
          onChange={handleStringInput}
          value={formData.cuisine}
          type="text"
          name="cuisine"
          id="cuisine"
          placeholder="recipe cuisine"
        />
        <FormMessage error={errors?.cuisine} />
      </div>
      <div className="field">
        <label> Calories Per Serving</label>
        <input
          onChange={handleNumberInput}
          value={formData.caloriesPerServing}
          type="number"
          name="caloriesPerServing"
          id="caloriesPerServing"
          placeholder="recipe caloriesPerServing"
        />
        <FormMessage error={errors?.caloriesPerServing} />
      </div>
      <div className="field">
        <label>Recipe Tags</label>
        <input
          onChange={handleStringInput}
          value={formData.tags}
          type="text"
          name="tags"
          id="tags"
          placeholder="recipe tags"
        />
        <FormMessage error={errors?.tags} />
      </div>
      
      <div className="field">
        <label>Recipe Meal Type</label>
        <input
          onChange={handleStringInput}
          value={formData.mealType}
          type="text"
          name="mealType"
          id="mealType"
          placeholder="recipe mealType"
        />
        <FormMessage error={errors?.mealType} />
      </div>
      <div className="field">
        <label> Rating</label>
        <input
          onChange={handleNumberInput}
          value={formData.rating}
          type="number"
          name="rating"
          id="rating"
          placeholder="recipe rating"
        />
        <FormMessage error={errors?.rating} />
      </div>
      <div className="field">
        <label>Recipe Image</label>
        <input
          onChange={handleStringInput}
          value={formData.img}
          type="text"
          name="img"
          id="img"
          placeholder="recipe image url"
        />
        <FormMessage error={errors?.img} />
      </div>

     
      <div className="field">
        <label>Favorite Recipe </label>
        <input
          onChange={handleBooleanInput}
          type="checkbox"
          checked={formData.featured as any}
          name="featured"
          id="featured"
          placeholder="recipe featured"
        />
      </div>

      <button className="ui button" type="submit">
        {recipeId ? 'Update' : 'Save'}
      </button>
      <button onClick={() => {navigate(`/`)}} className='ui button' type="button">Go Back</button>
    </form>
  );
};

export default RecipeForm;
