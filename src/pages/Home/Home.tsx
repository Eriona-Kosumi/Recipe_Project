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
import { Link, NavLink } from "react-router-dom";

import { useAuthContext } from "../../lib/context/AuthContext/AuthContext";
import Button from "../../components/shared/Button/Button";
import Favorites from "../../components/Favorites";





export const Home = () => {
  const {logout} = useAuthContext()
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-grey-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
    <a href="https://mdbootstrap.com" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://mdbootstrap.com//img/Photos/Square/1.jpg" className="pl-10 h-11" alt="Recipe Logo" />
        <span className=" self-center text-3xl font-semibold whitespace-nowrap text-red">Recipe</span>
    </a>
    
    <div className="  md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-row p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
       <li>
          <Link to='/' className="block py-1 px-12  font-semibold text- bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
        </li>
       
        <li>
        <Link to='favorites' className="block py-1 px-12  font-semibold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "aria-current="page">Favorites</Link>
        </li>
        <li>
        <Link to='add-recipe' className="block py-1 px-12  font-semibold text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"aria-current="page">Add Recipe</Link>
        </li>
        <li>
        <Button onClick={logout} color="red">Log out</Button>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
    <RecipesContextProvider>
   
      <div className="ui container mt-6 ">
     
     
        <hr />
        <RecipesList /> 
        <br />
        
      </div>
    </RecipesContextProvider>
  </div>);
};


 