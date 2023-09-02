import React from "react";
import { Link } from "react-router-dom";
//CSS
import styles from "../../Css/Navbar.module.css";

const Navbar = () => {
  const toogleMenu = () => {
    const menuItem = document.querySelectorAll(".Navbar_menuItem__dGCp4");
    menuItem.forEach((item) => {
      item.classList.toggle(styles.active);
    });
  };

  return (
    <nav className={styles.navbarContainer}>
      <ul className={styles.menu}>
        <li className={styles.navbarBrand}>
          <Link to="/">Recipe Site</Link>
        </li>
        <li onClick={toogleMenu} className={styles.menuItem}>
          <Link to="/">HOME</Link>
        </li>
        <li onClick={toogleMenu} className={styles.menuItem}>
          <Link to="categories">CATEGORİES</Link>
        </li>
        <li onClick={toogleMenu} className={styles.toogle}>
          <span className={styles.bars}></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
