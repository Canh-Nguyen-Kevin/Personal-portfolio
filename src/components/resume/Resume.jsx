import React, { useState } from "react";
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
  return (
    <div id="resume">
      <div className="title">
        <h2 className="big-text">RESUME</h2>
        <h4 className="small-text">My Formal Bio Details</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <div className="resume-container">
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
      </div>
    </div>
  );
};

export default Resume;
