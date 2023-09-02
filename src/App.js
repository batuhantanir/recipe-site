import "./App.css";
//ROUTER
import AppRouter from "./Router/AppRouter";
import { useEffect } from "react";
//REDUX
import { useDispatch } from "react-redux";
import { getRandomMeal } from "./Features/Meal/RandomMealSlice";
import { getCategories } from "./Features/Meal/CategoriesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMeal());
    dispatch(getCategories());
  });

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;
