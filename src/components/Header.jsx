import React from "react";
import Clock from "./Clock";
import Nav from "./Nav";

const Header = () => {
  return (
    <>
      <header className="head">
        <a id="icon" className="fa-solid fa-square-parking" href="#"></a>
        <h1 className="myname">Peter Ramos</h1>
        <Clock />
      </header>
      <Nav />
    </>
  );
};

export default Header;
