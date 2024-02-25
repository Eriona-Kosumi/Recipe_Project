//RecipesCard.tsx
import { useState } from "react";
import Modal from "../shared/Modal/Modal";
import Featured from "./Featured";
import { useRecipesContext } from "../../lib/context/RecipesContext/RecipesContext";

import { deleteRecipeApi, editRecipe } from "../../api/Recipes/recipes.client";
import { RecipeRespnseType } from "../../api/Recipes/recipes.types";
import ReactImageFallback from "react-image-fallback";
import { useNavigate } from "react-router-dom";
import React from "react";

import ReactStars from 'react-rating-star-with-type'


interface Props {
  recipe: RecipeRespnseType;
 
}
export interface RecipeInterface {
  _id: string;
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

const RecipeCard = ({ recipe }: Props) => {
  const { deleteRecipe,updateRecipe} = useRecipesContext()

  const navigate=useNavigate();

  
  const deleterecipeHandler = () => {
      deleteRecipeApi(recipe._id).then(() => {
        deleteRecipe(recipe._id)
      }).catch(err => {console.log(err)})
    }

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);


  const [rating, setRating] = useState(recipe.rating); // Initialize rating state with recipe's current rating
  const onChange = (nextValue: number) => {
    setRating(nextValue); // Update the rating state when it changes
    // Update the recipe's rating in the backend
    editRecipe(recipe._id, { ...recipe, rating: nextValue })
      
  }

  
  return (
    <div style={{paddingLeft:"0.3rem"}}>
    <div className="ui purple card">
       <Featured id={recipe._id} featured={recipe.featured}/>
       <div className="image">
     
      <ReactImageFallback
        src={recipe.img}
        fallbackImage={'https://placehold.co/400'}
        initialImage="loader.gif"
        alt="cool image should be here"
        className="my-image" />
    </div>
      <div className="content">
        <span className="header">{recipe.title}</span>
        
        <span className="text">{recipe.cuisine}</span>
        <span className="right floated">
          <i className="icon wait right" />
          {recipe.prepTimeMinutes+recipe.cookTimeMinutes} min
        </span>
      </div>

      <div className="extra">
      <i className="right floated add icon" onClick={handleOpenModal} />
        <span className="right floated" onClick={handleOpenModal}>
          Show Details
        </span>
       


Rating:
        <ReactStars
            onChange={onChange}
            value={rating}
            isEdit={true}
            activeColors={["orange"]}
          />
      
        <Modal showModal={showModal} onClose={handleCloseModal}>
          <div>
            
            <h1 className="text-2xl font-bold mb-4">{recipe.title}</h1>
            <p><strong style={{color:"black"}}> Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong style={{color:"black"}}>Difficulty: </strong> {recipe.difficulty}</p>
            <p><strong style={{color:"black"}}>Preperation Time:</strong>  {recipe.prepTimeMinutes} min</p>
            <p><strong style={{color:"black"}}>Cook Time: </strong> {recipe.cookTimeMinutes} min</p>
            <p><strong style={{color:"black"}}>Servings:</strong>  {recipe.servings}</p>
            <p><strong style={{color:"black"}}>Calories Per Serving:</strong>  {recipe.caloriesPerServing}</p>
            <p><strong style={{color:"black"}}>Meal Type:</strong>  {recipe.mealType}</p>
            <p><strong style={{color:"black"}}>Tags:</strong></p>
            <ol>
  {recipe.tags.split('\,').map((tag, index) => (
    <li key={index}>#{tag}</li>
  ))}
</ol><br />
            <p><strong style={{color:"black"}}>Ingredients:</strong> </p>
            <ol>
  {recipe.ingredients.split('\,').map((ingredient, index) => (
    <li key={index}>{ingredient}</li>
  ))}
</ol>
<br />

            <p><strong style={{color:"black"}}>Instructions:</strong></p>
<ol>
  {recipe.instructions.split(',').map((instruction, index) => (
    <li key={index}>{instruction}</li>
  ))}
</ol>

            
            <br />
          
          </div>
        </Modal>
        <br />
        <br />
        <button onClick={() => {navigate(`update-recipe/${recipe._id}`)}} className='ui button' type="button">Edit</button>
        <button onClick={deleterecipeHandler} className='ui button' type="button">Delete</button>

      </div>
    </div></div>
  );
};

export default RecipeCard;
