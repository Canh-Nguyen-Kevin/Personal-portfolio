import React from "react";
import { motion } from "framer-motion";
const svgVariants = {
  start: {
    opacity: 0,
    rotate: -180,
  },
  finish: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
};
const pathVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  finish: {
    opacity: 1,
    pathLength: 1,
    transition: { duration: 5, ease: "easeInOut" },
  },
};

const CodeIcon = () => {
  return (
    <div>
      <motion.svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        variants={svgVariants}
        initial="start"
        animate="finish"
      >
        <motion.path
          variants={pathVariants}
          fill="none"
          stroke="white"
          stroke-width="2"
          d="M9,22 L15,2 M17,17 L22,12 L17,7 M7,17 L2,12 L7,7"
        />
      </motion.svg>
    </div>
  );
};

export default CodeIcon;
