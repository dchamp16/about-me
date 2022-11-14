import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/style/fonts/active.css";

const Nav = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/">About Me</NavLink>
        </li>
        <li>
          <NavLink to="/personal-interest">Interest</NavLink>
        </li>
        <li>
          <NavLink to="/haiku">Info</NavLink>
        </li>
        <li>
          <NavLink to="/personal-bio">Bio</NavLink>
        </li>
        <li>
          <NavLink to="/favorite-book">Books</NavLink>
        </li>

        {/* <li>
            <NavLink to="schedule">Schedule</NavLink>
          </li> */}
        <li>
          <NavLink to="skills">Skill</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
