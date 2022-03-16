import React from "react";

import picture from "../../assets/img/picture.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  return (
    <div id="about">
      <div className="title">
        <h2 className="big-text">ABOUT ME</h2>
        <h4 className="small-text">Why Choose Me?</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <div className="content">
        <div className="rec-image">
          <img src={picture} alt="picture" />
        </div>
        <div className="description">
          <div className="summary">
            <h3>Full name: Nguyen Duc Canh</h3>
            <p>
              Canh is a freelance and a front-end developer based in Da Nang
              city with a passion for building digital services/stuff he wants.
              He has a knack for all things launching products, building
              applications with front-end operations (and back-end operations in
              the future). When not online, he loves hanging out with his
              friends and traveling. Currently, he is on his journey to discover
              the development environment.
            </p>
          </div>

          <div className="description-list">
            <h3>Here Are A Few Highlights</h3>

            <p>
              <FaArrowAltCircleRight className="icon-orange" />I have worked
              directly with Europian, Indian, Malaysian, Australian when i was
              stil a mechatronic engineer
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> Learning
              programming at a profesional center and all sources from the
              internet
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> Interactive
              Front End as per the design
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> Vanilla
              JavaScript and ReactJs
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> Redux for State
              Mnanagement
            </p>
          </div>

          <div className="about__button">
            <button className="trans-btn">Hire Me</button>
            <button className="orange-btn">Get Resume</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
