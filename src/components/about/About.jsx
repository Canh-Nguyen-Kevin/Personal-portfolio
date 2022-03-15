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
            <p>
              lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Pariatur illo quae nesciunt laboriosam. Tempora
              omnis expedita architecto commodi, in minima provident ab!
              Repudiandae veritatis harum aspernatur libero id voluptate quo.
              Ipsum iusto minima accusamus laborum magnam consequatur ipsa
              incidunt facilis reprehenderit quis? Obcaecati omnis saepe
              explicabo est autem, sunt
            </p>
          </div>

          <div className="description-list">
            <h3>Here Are A Few Highlights</h3>

            <p>
              <FaArrowAltCircleRight className="icon-orange" /> lorem ipsum
              dolor sit amet
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> lorem ipsum
              dolor sit amet
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> lorem ipsum
              dolor sit amet
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> lorem ipsum
              dolor sit amet
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> lorem ipsum
              dolor sit amet
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
