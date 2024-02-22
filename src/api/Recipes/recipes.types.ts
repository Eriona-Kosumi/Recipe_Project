//recipes.types.ts
//typescript types:
export interface RecipeRespnseType {
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
  
  export interface RecipesRespnseType {
    recipes: RecipeRespnseType[];
  }
  
  export interface AddRecipeRequest {
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