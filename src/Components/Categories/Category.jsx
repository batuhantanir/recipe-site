import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "../../Css/Categories/Category.module.css";

const Category = ({ category }) => {
  return (
    <li className={styles.container}>
      <Link to={`/categories/${category.strCategory}`}>
        <img
          className={styles.categoryImg}
          src={category.strCategoryThumb}
          alt={category.strCategory}
        />
        <h3>{category.strCategory}</h3>
      </Link>
      <p className={styles.categoryDescription}>
        {category.strCategoryDescription.split(". ", 1)}
      </p>
    </li>
  );
};

export default Category;
