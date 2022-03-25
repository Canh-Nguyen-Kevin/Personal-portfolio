import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaHandPointRight } from "react-icons/fa";

const cardsArr = [
  {
    id: 1,
    image: "./img/game.jpg",
    title: "Game Cards Ecommerce Shop",
    description:
      "A shop that selling games and all kind of cards for learning or entertainment",
    page: "http://game-shop-heroku.herokuapp.com/",
    source: "https://github.com/Canh-Nguyen-Kevin/game-shop-heroku",
  },
  {
    id: 2,
    image: "./img/covid.png",
    title: "Covid 19 Tracker App",
    description:
      "An app that show the statistics about Covid-19 of every country",
    page: "https://covid-22-tracker.netlify.app/",
    source: "https://github.com/Canh-Nguyen-Kevin/covid19-tracker",
  },
  {
    id: 3,
    image: "./img/match.jpg",
    title: "Memory Match Game",
    description:
      "A funny game that can train your memory by matching pairs of cards",
    page: "http://game-shop-heroku.herokuapp.com/",
    source: "https://github.com/Canh-Nguyen-Kevin/game-shop-heroku",
  },
  {
    id: 4,
    image: "./img/landing.png",
    title: "Landing Page",
    description: "A normal responsive landing page that every website needed",
    page: "http://game-shop-heroku.herokuapp.com/",
    source: "https://github.com/Canh-Nguyen-Kevin/game-shop-heroku",
  },
  {
    id: 5,
    image: "./img/portfolio.jpg",
    title: "Portfolio Page",
    description:
      "It is this page, i use this to show my skills, bio and resume",
    page: "https://canhnguyen-portfolio.netlify.app/",
    source: "https://github.com/Canh-Nguyen-Kevin/Personal-portfolio",
  },
];

const Portfolio = () => {
  const cards = cardsArr;
  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, bounce: 0.2 },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",

        transition: { type: "spring", duration: 1 },
      });
    }
  }, [inView]);
  return (
    <div ref={ref} id="portfolio" className="background">
      <div className="title">
        <h2 className="big-text">PORTFOLIO</h2>
        <h4 className="small-text">My Personal Projects in Details</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <motion.div animate={animation} className="portfolio-container">
        {cards.map((card) => {
          return (
            <div className="portfolio-card" key={card.id}>
              <div className="card-image">
                <img src={card.image} alt="image" />
                <div className="card-btn">
                  <button>
                    <a href={card.page} target="_blank">
                      <FaHandPointRight className="icon-white" />
                      Visit
                    </a>
                  </button>
                  <button>
                    <a href={card.source} target="_blank">
                      <FaGithub className="icon-white" />
                      Source
                    </a>
                  </button>
                </div>
              </div>
              <div className="card-description">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default Portfolio;
