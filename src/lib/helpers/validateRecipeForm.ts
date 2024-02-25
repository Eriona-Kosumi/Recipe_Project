//validateRecipeForm.ts
import { ErrorFormDataType, FormDataType } from "../../components/RecipeForm/RecipeForm";

export const validate = (obj: FormDataType): ErrorFormDataType => {
  const errors: ErrorFormDataType = {};
  if (!obj.title) errors.title = "This field is required";
  if (!obj.ingredients) errors.ingredients = "This field is required";
  if (!obj.instructions) errors.instructions = "This field is required";
  if (!obj.prepTimeMinutes) errors.prepTimeMinutes = "This field is required";
  if (!obj.cookTimeMinutes) errors.cookTimeMinutes = "This field is required";
  if (!obj.servings) errors.servings = "This field is required";
  if (!obj.difficulty) errors.difficulty = "This field is required";
  if (!obj.cuisine) errors.cuisine = "This field is required";
  if (!obj.caloriesPerServing) errors.caloriesPerServing = "This field is required";
  if (!obj.tags) errors.tags = "This field is required";

  if (!obj.rating) errors.rating = "This field is required";

  if (!obj.mealType) errors.mealType = "This field is required";
  if (!obj.img) errors.img = "This field is required";
  if (obj.cookTimeMinutes <= 0) errors.cookTimeMinutes = "cookTimeMinutes error: should be positive number";
  if (obj.prepTimeMinutes <= 0) errors.prepTimeMinutes = "prepTimeMinutes error: should be positive number";
  if (obj.servings <= 0) errors.servings = "servings must be only positive value";
  if (obj.caloriesPerServing <= 0) errors.caloriesPerServing = "caloriesPerServing must be only positive value";

  if (obj.rating < 0) errors.rating = "rating must be only positive value";
  if (obj.rating > 5) errors.rating = "max rating is 5 star";

  return errors;
};
