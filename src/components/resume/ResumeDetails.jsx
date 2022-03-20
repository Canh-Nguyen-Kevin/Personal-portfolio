import React from "react";
import { FaDotCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const educationArr = [
  {
    id: 1,
    title: "Da Nang University of Science and Technology",
    des: "Degree in Mechatronics Engineering",
    time: "2012-2017",
  },
  {
    id: 2,
    title: "iViettech Programing Center",
    des: "Front-end development",
    time: "2021",
  },
];
const workArr = [
  {
    id: 1,
    title: "Daiwa Vietnam Limited Company",
    des: "Fishing Reels Designer",
    time: "2017-2019",
  },
  {
    id: 2,
    title: "Lilama 18 Joint Stock Company",
    des: "Supervisor, QC, Lead Engineer",
    time: "2019-2021",
  },
  {
    id: 3,
    title: "Freelancer",
    des: "Front-end Developer",
    time: "2021-present",
  },
];
const skillsArr = [
  {
    id: 1,
    title: "HTML,CSS,JavaScript",
    des: "",
    time: "",
  },
  {
    id: 2,
    title: "SCSS,TypeScript",
    des: "",
    time: "",
  },
  {
    id: 3,
    title: "ReactJs,ReDux",
    des: "",
    time: "",
  },
  {
    id: 4,
    title: "Bootstrap, Material UI, Antd",
    des: "",
    time: "",
  },
];
const projectsArr = [
  {
    id: 1,
    title: "Tribute Page,Landing Page, Portfolio Page",
    des: "",
    time: "",
  },
  {
    id: 2,
    title: "Memory Match Game, Quiz Game, Todo App",
    des: "",
    time: "",
  },
  {
    id: 3,
    title: "Game Cards Ecommerce Shop ",
    des: "",
    time: "",
  },
];
const interestArr = [
  {
    id: 1,
    title: "Teaching",
    des: "Apart from being a tech enthusiast, i also love to teach people what i know simply because i believe in sharing and 'teaching is learning'.",
    time: "",
  },
  {
    id: 2,
    title: "Music",
    des: "Listening to Jazz or Pop while learning and EDM while doing sports is a way to enjoy and relax.",
    time: "",
  },
  {
    id: 3,
    title: "Sports",
    des: "I like to challenge my limits by doing sports like swimming, jogging,workout and eSport is also my favorite.",
    time: "",
  },
];

const detailVariants = {
  open: {
    opacity: [0, 1],

    transition: { duration: 1 },
  },
  close: {
    opacity: 0,
  },
  exit: { opacity: 0 },
};
const ResumeDetails = ({ selected }) => {
  const education = educationArr;
  const work = workArr;
  const skills = skillsArr;
  const projects = projectsArr;
  const interest = interestArr;
  return (
    <div className="resume-details">
      <AnimatePresence exitBeforeEnter>
        <motion.div
          variants={detailVariants}
          animate={selected === "education" ? "open" : "close"}
          exit="exit"
          className={selected === "education" ? "education" : "hide"}
        >
          {education.map((item) => {
            return (
              <div id={item.id} className="info-container">
                <div className="left">
                  <p className="orange">
                    <FaDotCircle className="icon-orange" />
                    {item.title}
                  </p>
                  <p className="des">{item.des}</p>
                </div>
                <div className="right">
                  <button className="small-btn">{item.time}</button>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={detailVariants}
          animate={selected === "work" ? "open" : "close"}
          exit="exit"
          className={selected === "work" ? "work" : "hide"}
        >
          {work.map((item) => {
            return (
              <div id={item.id} className="info-container">
                <div className="left">
                  <p className="orange">
                    <FaDotCircle className="icon-orange" />
                    {item.title}
                  </p>
                  <p className="des">{item.des}</p>
                </div>
                <div className="right">
                  <button className="small-btn">{item.time}</button>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.div
          variants={detailVariants}
          animate={selected === "skills" ? "open" : "close"}
          exit="exit"
          className={selected === "skills" ? "skills" : "hide"}
        >
          {skills.map((item) => {
            return (
              <div id={item.id} className="info-container">
                <div className="left">
                  <p className="orange">
                    <FaDotCircle className="icon-orange" />
                    {item.title}
                  </p>
                  <p className="des">{item.des}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={detailVariants}
          animate={selected === "projects" ? "open" : "close"}
          exit="exit"
          className={selected === "projects" ? "projects" : "hide"}
        >
          {projects.map((item) => {
            return (
              <div id={item.id} className="info-container">
                <div className="left">
                  <p className="orange">
                    <FaDotCircle className="icon-orange" />
                    {item.title}
                  </p>
                  <p className="des">{item.des}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          variants={detailVariants}
          animate={selected === "interest" ? "open" : "close"}
          exit="exit"
          className={selected === "interest" ? "interest" : "hide"}
        >
          {interest.map((item) => {
            return (
              <div id={item.id} className="info-container">
                <div className="left">
                  <p className="orange">
                    <FaDotCircle className="icon-orange" />
                    {item.title}
                  </p>
                  <p className="text">{item.des}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResumeDetails;
