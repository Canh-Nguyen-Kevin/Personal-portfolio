import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaUserGraduate,
  FaRegHandshake,
  FaLaptopCode,
  FaProjectDiagram,
  FaPlaystation,
} from "react-icons/fa";
import ResumeDetails from "./ResumeDetails";
const Resume = () => {
  const [selected, setSelected] = useState("education");
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        scale: 1,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.1 },
      });
    }
    if (!inView) {
      animation.start({
        scale: 1.2,
        opacity: 0.3,

        transition: { type: "spring", duration: 1 },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} id="resume" className="background">
      <div className="title">
        <h2 className="big-text">RESUME</h2>
        <h4 className="small-text">My Formal Bio Details</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <motion.div animate={animation} className="resume-container">
        <div className="resume-list">
          <p
            className={selected === "education" ? "active" : ""}
            onClick={() => setSelected("education")}
          >
            <FaUserGraduate
              className={selected === "education" ? "icon" : "icon-black"}
            />
            Education
          </p>
          <p
            className={selected === "work" ? "active" : ""}
            onClick={() => setSelected("work")}
          >
            <FaRegHandshake
              className={selected === "work" ? "icon" : "icon-black"}
            />
            Work History
          </p>
          <p
            className={selected === "skills" ? "active" : ""}
            onClick={() => setSelected("skills")}
          >
            <FaLaptopCode
              className={selected === "skills" ? "icon" : "icon-black"}
            />
            Programing Skills
          </p>
          <p
            className={selected === "projects" ? "active" : ""}
            onClick={() => setSelected("projects")}
          >
            <FaProjectDiagram
              className={selected === "projects" ? "icon" : "icon-black"}
            />
            Projects
          </p>
          <p
            className={selected === "interest" ? "active" : ""}
            onClick={() => setSelected("interest")}
          >
            <FaPlaystation
              className={selected === "interest" ? "icon" : "icon-black"}
            />
            Interest
          </p>
        </div>
        <ResumeDetails selected={selected} />
      </motion.div>
    </div>
  );
};

export default Resume;
