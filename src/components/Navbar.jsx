// import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/book">Book</NavLink>
        </li>
        <li>
          <NavLink to="/Podcast">Podcast</NavLink>
        </li>
        <li>
          <NavLink to="/AllBooks">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;