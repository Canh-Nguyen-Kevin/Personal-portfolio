import React from "react";

import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";
import Typing from "./Typing";
import avatar from "../../assets/img/avatar.JPG";

const Header = () => {
  return (
    <div className="header wave-background">
      <div className="header__text">
        <div className="header__text--social">
          <ul>
            <li>
              <a href="">
                <FaFacebookSquare className="icon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaGooglePlusSquare className="icon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaTwitterSquare className="icon" />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithubSquare className="icon" />
              </a>
            </li>
            <h2>
              Hello! I'm <span className="orange">Canh Nguyen</span>
            </h2>
          </ul>
        </div>
        <div className="header__typing">
          <Typing />
        </div>
        <div className="header__text--button">
          <button className="trans-btn">Hire Me</button>
          <button className="orange-btn">Get Resume</button>
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
