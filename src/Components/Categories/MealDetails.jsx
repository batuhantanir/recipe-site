import React, { useEffect } from "react";
//CSS
import styles from "../../Css/Categories/MealDetails.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMealDetails } from "../../Features/Meal/MealDetailsSlice";
import { Link } from "react-router-dom";

const MealDetails = ({ path }) => {
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.meal).meal.meals;
  console.log(meal);

  useEffect(() => {
    dispatch(getMealDetails(path));
  }, [path]);

  return (
    <div className={styles.container}>
      {meal !== undefined
        ? meal.map((meal) => (
            <div>
              <Link
                className={styles.backtocategories}
                to={`/categories/${meal.strCategory}`}
              >
                Back To {meal.strCategory} Category
              </Link>
              <div className={styles.card}>
                <h4 className={styles.header}>{meal.strMeal}</h4>
                {meal.strYoutube ? (
                  <a href={meal.strYoutube} target="_blank">
                    <img
                      className={styles.Img}
                      src={meal.strMealThumb}
                      alt="Go to Youtube"
                    />
                  </a>
                ) : (
                  <img
                    className={styles.Img}
                    src={meal.strMealThumb}
                    alt="Go to Youtube"
                  />
                )}
                <ul className={styles.ingredient}>
                  <li>
                    <h5>INGREDİENT :</h5>
                  </li>
                  <li>
                    {meal.strIngredient1 !== "" ? meal.strIngredient1 : ""}{" "}
                    {meal.strMeasure1 !== "" ? meal.strMeasure1 : ""}
                  </li>
                  <li>
                    {meal.strIngredient2 !== "" ? meal.strIngredient2 : ""}{" "}
                    {meal.strMeasure2 !== "" ? meal.strMeasure2 : ""}
                  </li>
                  <li>
                    {meal.strIngredient3 !== "" ? meal.strIngredient3 : ""}{" "}
                    {meal.strMeasure3 !== "" ? meal.strMeasure3 : ""}
                  </li>
                  <li>
                    {meal.strIngredient1 !== "" ? meal.strIngredient4 : ""}{" "}
                    {meal.strMeasure4 !== "" ? meal.strMeasure4 : ""}
                  </li>
                  <li>
                    {meal.strIngredient5 !== "" ? meal.strIngredient5 : ""}{" "}
                    {meal.strMeasure5 !== "" ? meal.strMeasure5 : ""}
                  </li>
                  <li>
                    {meal.strIngredient6 !== "" ? meal.strIngredient6 : ""}{" "}
                    {meal.strMeasure6 !== "" ? meal.strMeasure6 : ""}
                  </li>
                  <li>
                    {meal.strIngredient7 !== "" ? meal.strIngredient7 : ""}{" "}
                    {meal.strMeasure7 !== "" ? meal.strMeasure7 : ""}
                  </li>
                  <li>
                    {meal.strIngredient8 !== "" ? meal.strIngredient8 : ""}{" "}
                    {meal.strMeasure8 !== "" ? meal.strMeasure8 : ""}
                  </li>
                  <li>
                    {meal.strIngredient9 !== "" ? meal.strIngredient9 : ""}{" "}
                    {meal.strMeasure9 !== "" ? meal.strMeasure9 : ""}
                  </li>
                  <li>
                    {meal.strIngredient10 !== "" ? meal.strIngredient10 : ""}{" "}
                    {meal.strMeasure10 !== "" ? meal.strMeasure10 : ""}
                  </li>
                  <li>
                    {meal.strIngredient11 !== "" ? meal.strIngredient11 : ""}{" "}
                    {meal.strMeasure11 !== "" ? meal.strMeasure11 : ""}
                  </li>
                  <li>
                    {meal.strIngredient12 !== "" ? meal.strIngredient12 : ""}{" "}
                    {meal.strMeasure12 !== "" ? meal.strMeasure12 : ""}
                  </li>
                  <li>
                    {meal.strIngredient13 !== "" ? meal.strIngredient13 : ""}{" "}
                    {meal.strMeasure13 !== "" ? meal.strMeasure13 : ""}
                  </li>
                  <li>
                    {meal.strIngredient14 !== "" ? meal.strIngredient14 : ""}{" "}
                    {meal.strMeasure14 !== "" ? meal.strMeasure14 : ""}
                  </li>
                  <li>
                    {meal.strIngredient15 !== "" ? meal.strIngredient15 : ""}{" "}
                    {meal.strMeasure15 !== "" ? meal.strMeasure15 : ""}
                  </li>
                  <li>
                    {meal.strIngredient16 !== "" ? meal.strIngredient16 : ""}{" "}
                    {meal.strMeasure16 !== "" ? meal.strMeasure16 : ""}
                  </li>
                  <li>
                    {meal.strIngredient17 !== "" ? meal.strIngredient17 : ""}{" "}
                    {meal.strMeasure17 !== "" ? meal.strMeasure17 : ""}
                  </li>
                  <li>
                    {meal.strIngredient18 !== "" ? meal.strIngredient18 : ""}{" "}
                    {meal.strMeasure18 !== "" ? meal.strMeasure18 : ""}
                  </li>
                  <li>
                    {meal.strIngredient19 !== "" ? meal.strIngredient19 : ""}{" "}
                    {meal.strMeasure19 !== "" ? meal.strMeasure19 : ""}
                  </li>
                  <li>
                    {meal.strIngredient20 !== "" ? meal.strIngredient20 : ""}{" "}
                    {meal.strMeasure20 !== "" ? meal.strMeasure20 : ""}
                  </li>
                </ul>
                <div className={styles.prepartion}>
                  <h5 className={styles.prepartionHead}>PREPARTION</h5>
                  <p>{meal.strInstructions}</p>
                </div>
              </div>
            </div>
          ))
        : "Loading.."}{" "}
    </div>
  );
};

export default MealDetails;
