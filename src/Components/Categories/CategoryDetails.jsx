import React, { useEffect } from "react";
//CSS
import styles from "../../Css/Categories/CategoryDetails.module.css";
//COMPONENTS
import MealsDetails from "./MealsDetails";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryDetails } from "../../Features/Meal/CategoryDetailsSlice";
import { Link } from "react-router-dom";

const CategoryDetails = ({ path }) => {
  const dispatch = useDispatch();
  const meals = useSelector((state) => state.meals).meals.meals;
  useEffect(() => {
    dispatch(getCategoryDetails(path));
  }, [path]);

  return (
    <div className={styles.container}>
      <Link className={styles.backtocategories} to="/categories">
        Back To Categories
      </Link>
      <div className={styles.categoryContainer}>
        <h4 className={styles.Header}>{path}</h4>
        {meals?.map((meal) => (
          <MealsDetails meal={meal} key={meal.idMeal} />
        ))}
      </div>
    </div>
  );
};

export default CategoryDetails;
