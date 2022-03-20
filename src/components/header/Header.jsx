import React from "react";
import { Link } from "react-scroll";
import Typing from "./Typing";
import avatar from "../../assets/img/avatar.JPG";
import HeartIcon from "../animateItems/HeartIcon";

const Header = () => {
  return (
    <div className="header wave-background">
      <div className="header__text">
        <div className="header__text--social">
          <HeartIcon />
          <h2>
            Hello! I'm <span className="orange">Canh Nguyen</span>
          </h2>
        </div>
        <div className="header__typing">
          <Typing />
        </div>
        <div className="header__text--button">
          <Link to="contact" spy={true} smooth={true} offset={0} duration={800}>
            <button className="trans-btn">Contact Me</button>
          </Link>

          <a
            href="/files/Canh Nguyen-Front end developer.pdf"
            target="_blank"
            download
          >
            <button className="orange-btn">Get Resume</button>
          </a>
        </div>
      </div>
      <div className="header__avatar">
        <div className="image-container">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default Header;
