import React, { useState } from "react";
import { FaIndent, FaWindowClose } from "react-icons/fa";
const Menu = () => {
  return (
    <ul>
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#resume">Resume</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#contact">Contact Me</a>
      </li>
    </ul>
  );
};
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="navbar">
        <div className="small-menu">
          {!showMenu ? (
            <FaIndent className="icon" onClick={() => setShowMenu(true)} />
          ) : (
            <FaWindowClose
              className="icon"
              onClick={() => setShowMenu(false)}
            />
          )}
        </div>

        <div className="navbar__logo">
          <h1>CANH NGUYEN</h1>
        </div>
        <div className="navbar__menu">
          <Menu />
        </div>
      </div>
      <div
        className={showMenu ? "menu-list active" : "menu-list"}
        onClick={() => setShowMenu(false)}
      >
        <Menu />
      </div>
    </>
  );
};

export default Navbar;
