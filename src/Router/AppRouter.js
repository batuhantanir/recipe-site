import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
//COMPONENTS
import Navbar from "../Components/Navbar/Navbar";
import Home from "../Components/Home/Home";
import Footer from "../Components/Footer/Footer";
import Categories from "../Components/Categories/Categories";
import CategoryDetails from "../Components/Categories/CategoryDetails";
import MealDetails from "../Components/Categories/MealDetails";
import ContactUs from "../Components/Contact Us/ContactUs";
import About from "../Components/About/About";

const AppRouter = () => {
  const categories = useSelector((state) => state.Categories).Categories;
  const meals = useSelector((state) => state.meals).meals.meals;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="categories" element={<Categories />} />
        {categories?.map((category) => (
          <Route key={category.idCategory}>
            <Route
              key={category.idCategory}
              path={`/categories/${category.strCategory}`}
              element={<CategoryDetails path={category.strCategory} />}
            />
            {category
              ? meals?.map((meal) => (
                  <Route
                    key={meal.idMeal}
                    path={`/categories/${category.strCategory}/${meal.idMeal}`}
                    element={<MealDetails path={meal.idMeal} />}
                  />
                ))
              : ""}
          </Route>
        ))}
        <Route path="contact" element={<ContactUs />} />
        <Route path="about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
