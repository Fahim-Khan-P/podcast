// import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink className={styles.home} to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/AllBooks">All Books</NavLink>
        </li>
        <li>
          <NavLink to="/book">Category</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">Writter</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">Publisher</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">Gallery</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">PDF Books</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">About</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;