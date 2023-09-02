import { configureStore } from "@reduxjs/toolkit";
//SLİCES
import randomMealSlice from "../Features/Meal/RandomMealSlice";
import CategoriesSlice from "../Features/Meal/CategoriesSlice";
import CategoryDetailsSlice from "../Features/Meal/CategoryDetailsSlice";
import MealDetailsSlice from "../Features/Meal/MealDetailsSlice";

export const store = configureStore({
  reducer: {
    randomMeal: randomMealSlice,
    Categories: CategoriesSlice,
    meals: CategoryDetailsSlice,
    meal: MealDetailsSlice,
  },
});
