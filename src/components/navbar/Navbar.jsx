import React, { useState } from "react";
import { Link } from "react-scroll";

import { FaIndent, FaWindowClose, FaPaw } from "react-icons/fa";

const Menu = () => {
  const [selected, setSelected] = useState("");
  console.log("setSelected", selected);
  return (
    <ul>
      <li>
        <Link
          onClick={() => setSelected("home")}
          className={selected === "home" ? "selected" : ""}
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setSelected("about")}
          className={selected === "about" ? "selected" : ""}
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          About Me
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setSelected("resume")}
          className={selected === "resume" ? "selected" : ""}
          to="resume"
          spy={true}
          smooth={true}
          offset={0}
          duration={600}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setSelected("portfolio")}
          className={selected === "portfolio" ? "selected" : ""}
          to="portfolio"
          spy={true}
          smooth={true}
          offset={0}
          duration={700}
        >
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          onClick={() => setSelected("contact")}
          className={selected === "contact" ? "selected" : ""}
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={800}
        >
          Contact Me
        </Link>
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [changeBg, setChangeBg] = useState(false);
  const changeBackground = () => {
    window.scrollY >= 500 ? setChangeBg(true) : setChangeBg(false);
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <div id="navbar">
      <div
        className={changeBg ? "navbar-container active" : "navbar-container"}
      >
        <div className="small-menu">
          {!showMenu ? (
            <FaIndent
              className={changeBg ? "icon-black" : "icon"}
              onClick={() => setShowMenu(true)}
            />
          ) : (
            <FaWindowClose
              className={changeBg ? "icon-black" : "icon"}
              onClick={() => setShowMenu(false)}
            />
          )}
        </div>

        <div className="navbar__logo">
          <h1>
            <Link
              to="header"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <FaPaw className={changeBg ? "nav-iconBlack" : "nav-iconWhite"} />
              CANH NGUYEN
            </Link>
          </h1>
        </div>
        <div className="navbar__menu">
          <Menu />
        </div>
        <div
          className={showMenu ? "menu-list active" : "menu-list"}
          onClick={() => setShowMenu(false)}
        >
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
