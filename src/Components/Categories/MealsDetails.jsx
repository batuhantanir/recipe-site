import React from "react";
//CSS
import styles from "../../Css/Categories/MealsDetails.module.css";

//Router
import { Link } from "react-router-dom";

const MealsDetails = ({ meal }) => {
  return (
    <span className={styles.Card}>
      <Link to={meal.idMeal} className={styles.Link}>
        <img
          className={styles.Img}
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <h4 className={styles.Header}>{meal.strMeal}</h4>
      </Link>
    </span>
  );
};

export default MealsDetails;
