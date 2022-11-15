import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  let location = [
    "/",
    "/personal-interest",
    "/haiku",
    "/personal-bio",
    "/favorite-book",
    "skills",
    "contact",
  ];
  let listName = ["About Me", "Interest", "Info", "Bio", "Books", "Skill", "Contact"];

  let li = location.map((value, index) => {
    return (
      <NavLink
        style={({ isActive }) => {
          return isActive ? { color: "red" } : {};
        }}
        className="li"
        key={index}
        to={value}
      >
        {listName[index]}
      </NavLink>
    );
  });
  return (
    <nav className="nav-bar">
      <ul>{li}</ul>
    </nav>
  );
}

export default Nav;
