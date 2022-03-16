import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaIndent, FaWindowClose } from "react-icons/fa";
const Menu = () => {
  return (
    <ul>
      <li>
        <Link to="/" spy={true} smooth={true} offset={50} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          About Me
        </Link>
      </li>
      <li>
        <Link to="resume" spy={true} smooth={true} offset={0} duration={600}>
          Resume
        </Link>
      </li>
      <li>
        <Link to="portfolio" spy={true} smooth={true} offset={0} duration={700}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>
          Contact Me
        </Link>
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
