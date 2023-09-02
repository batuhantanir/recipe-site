import React from "react";
import { useSelector } from "react-redux";
//COMPONENTS
import Category from "./Category";
//CSS
import styles from "../../Css/Categories/Categories.module.css";

const Categories = () => {
  const categories = useSelector((state) => state.Categories).Categories;
  return (
    <div className={styles.container}>
      <ul>
        {categories?.map((category) => (
          <Category category={category} key={category.idCategory} />
        ))}
      </ul>
    </div>
  );
};

export default Categories;
