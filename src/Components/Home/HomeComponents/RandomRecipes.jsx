import React from "react";
import { useSelector } from "react-redux";
import styles from "../../../Css/Home/RandomRecipes.module.css";

const RandomRecipes = () => {
  const RandomMeal = useSelector((state) => state.randomMeal).randomMeal;

  return (
    <div className={styles.container}>
      <h4>RANDOM RECİPES</h4>
      <div className={styles.card}>
        <h5 className={styles.header}>{RandomMeal.strMeal}</h5>
        <img className={styles.Img} src={RandomMeal.strMealThumb} alt="" />
        <ul className={styles.ingredient}>
          <li>
            <h5>INGREDİENT :</h5>
          </li>
          <li>
            {RandomMeal.strIngredient1 !== "" ? RandomMeal.strIngredient1 : ""}{" "}
            {RandomMeal.strMeasure1 !== "" ? RandomMeal.strMeasure1 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient2 !== "" ? RandomMeal.strIngredient2 : ""}{" "}
            {RandomMeal.strMeasure2 !== "" ? RandomMeal.strMeasure2 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient3 !== "" ? RandomMeal.strIngredient3 : ""}{" "}
            {RandomMeal.strMeasure3 !== "" ? RandomMeal.strMeasure3 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient1 !== "" ? RandomMeal.strIngredient4 : ""}{" "}
            {RandomMeal.strMeasure4 !== "" ? RandomMeal.strMeasure4 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient5 !== "" ? RandomMeal.strIngredient5 : ""}{" "}
            {RandomMeal.strMeasure5 !== "" ? RandomMeal.strMeasure5 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient6 !== "" ? RandomMeal.strIngredient6 : ""}{" "}
            {RandomMeal.strMeasure6 !== "" ? RandomMeal.strMeasure6 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient7 !== "" ? RandomMeal.strIngredient7 : ""}{" "}
            {RandomMeal.strMeasure7 !== "" ? RandomMeal.strMeasure7 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient8 !== "" ? RandomMeal.strIngredient8 : ""}{" "}
            {RandomMeal.strMeasure8 !== "" ? RandomMeal.strMeasure8 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient9 !== "" ? RandomMeal.strIngredient9 : ""}{" "}
            {RandomMeal.strMeasure9 !== "" ? RandomMeal.strMeasure9 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient10 !== ""
              ? RandomMeal.strIngredient10
              : ""}{" "}
            {RandomMeal.strMeasure10 !== "" ? RandomMeal.strMeasure10 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient11 !== ""
              ? RandomMeal.strIngredient11
              : ""}{" "}
            {RandomMeal.strMeasure11 !== "" ? RandomMeal.strMeasure11 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient12 !== ""
              ? RandomMeal.strIngredient12
              : ""}{" "}
            {RandomMeal.strMeasure12 !== "" ? RandomMeal.strMeasure12 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient13 !== ""
              ? RandomMeal.strIngredient13
              : ""}{" "}
            {RandomMeal.strMeasure13 !== "" ? RandomMeal.strMeasure13 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient14 !== ""
              ? RandomMeal.strIngredient14
              : ""}{" "}
            {RandomMeal.strMeasure14 !== "" ? RandomMeal.strMeasure14 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient15 !== ""
              ? RandomMeal.strIngredient15
              : ""}{" "}
            {RandomMeal.strMeasure15 !== "" ? RandomMeal.strMeasure15 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient16 !== ""
              ? RandomMeal.strIngredient16
              : ""}{" "}
            {RandomMeal.strMeasure16 !== "" ? RandomMeal.strMeasure16 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient17 !== ""
              ? RandomMeal.strIngredient17
              : ""}{" "}
            {RandomMeal.strMeasure17 !== "" ? RandomMeal.strMeasure17 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient18 !== ""
              ? RandomMeal.strIngredient18
              : ""}{" "}
            {RandomMeal.strMeasure18 !== "" ? RandomMeal.strMeasure18 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient19 !== ""
              ? RandomMeal.strIngredient19
              : ""}{" "}
            {RandomMeal.strMeasure19 !== "" ? RandomMeal.strMeasure19 : ""}
          </li>
          <li>
            {RandomMeal.strIngredient20 !== ""
              ? RandomMeal.strIngredient20
              : ""}{" "}
            {RandomMeal.strMeasure20 !== "" ? RandomMeal.strMeasure20 : ""}
          </li>
        </ul>
        <p className={styles.descrp}>{RandomMeal.strInstructions}</p>
      </div>
    </div>
  );
};

export default RandomRecipes;
