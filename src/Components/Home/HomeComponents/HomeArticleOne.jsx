import React from "react";
import styles from "../../../Css/Home/HomeArticleOne.module.css";
//IMG
import Meal from '../../../assets/img/meal.png'


const HomeArticlOne = () => {
  return <div className={styles.HomeArticlOneContainer}>
    <h2 className={styles.HomeArticleOneH2} >Delicious Recipes and Cooking Tips</h2>
    <img className={styles.HomeArticleOneImg} src={Meal} alt="" />
  </div>;
};

export default HomeArticlOne;
