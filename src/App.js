import React from "react";
import "./components/sass/main.scss";
import { motion } from "framer-motion";

import {
  About,
  Contact,
  Header,
  Navbar,
  Resume,
  Portfolio,
} from "./components";

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
  return (
    <div className="App">
      <motion.div
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Navbar />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", duration: 1, bounce: 0.3 }}
      >
        <Resume />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Portfolio />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <Contact />
      </motion.div>
    </div>
  );
}

export default App;
