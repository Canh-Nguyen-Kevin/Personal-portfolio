import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookSquare,
  FaGooglePlusSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="background">
      <div className="title">
        <h2 className="big-text">CONTACT ME</h2>
        <h4 className="small-text">Let's keep in touch</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <motion.div className="contact-container">
        <div className="contact-mail">
          <p>
            Send your message to <strong>nguyencanh127@gmail.com</strong>
          </p>
          <p>OR</p>
          <div className="contact-social">
            <ul>
              <li>
                <a href="">
                  <FaFacebookSquare className="icon-black" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGooglePlusSquare className="icon-black" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaLinkedin className="icon-black" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitterSquare className="icon-black" />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithubSquare className="icon-black" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
      <div className="copyright">
        &copy; 2022 Canh Nguyen. All Rights Reserved.
      </div>
    </div>
  );
};

export default Contact;
