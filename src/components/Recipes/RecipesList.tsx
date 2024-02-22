//RecipesList.tsx
import { useRecipesContext } from "../../lib/context/RecipesContext/RecipesContext"
import Search from "../Search/Search"
import RecipeCard from "./RecipeCard"


const RecipesList = () => {
  const {recipes: movies} = useRecipesContext()
  
  return (
    <div >

        {
      <Search/>
        }
    </div>
  )
}

export default RecipesList