import React, { useEffect } from "react";
import { Link } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import picture from "../../assets/img/picture.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", duration: 2, bounce: 0.2 },
      });
    }
    if (!inView) {
      animation.start({
        scale: 1.3,
        opacity: 0.3,
        transition: { type: "spring", duration: 1 },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} id="about" className="background">
      <div className="title">
        <h2 className="big-text">ABOUT ME</h2>
        <h4 className="small-text">Why Choose Me?</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <motion.div animate={animation} className="content">
        <div className="rec-image">
          <img src={picture} alt="picture" />
        </div>
        <div className="description">
          <div className="summary">
            <h3>Full name: Nguyen Duc Canh</h3>
            <p>
              Canh is a freelancer and a front-end developer based in Da Nang
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
              directly with European, Indian, Malaysian, Australian when i was
              still a mechatronics engineer
            </p>
            <p>
              <FaArrowAltCircleRight className="icon-orange" /> Learning
              programming at a professional center and all sources from the
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
              Management
            </p>
          </div>

          <div className="about__button">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={600}
            >
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
      </motion.div>
    </div>
  );
};

export default About;
