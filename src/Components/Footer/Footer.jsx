import React from "react";
import { Link } from "react-router-dom";
//ICONS
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
//CSS
import styles from "../../Css/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <ul className={styles.mapList}>
        <li className={styles.mapItem}><Link to="about">ABOUT</Link></li>
        <li className={styles.mapItem}><Link to="contact">CONTACT US</Link></li>
      </ul>
      <div>
        <h5>FOLLOW US</h5>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/" target="_blank">
            <BsFacebook />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            {" "}
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
