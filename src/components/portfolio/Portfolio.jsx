import React from "react";
import { FaGithub, FaHandPointRight } from "react-icons/fa";

const cardsArr = [
  {
    id: 1,
    image: "./img/game.jpg",
    title: "Game Cards Ecommerce Shop",
    description:
      "A shop that selling games and all kind of cards for learning or entertainment",
  },
  {
    id: 2,
    image: "./img/covid.png",
    title: "Covid 19 Tracker App",
    description:
      "An app that show the statistics about Covid-19 of every country",
  },
  {
    id: 3,
    image: "./img/match.jpg",
    title: "Memory Match Game",
    description:
      "A funny game that can train your memory by matching pairs of cards",
  },
  {
    id: 4,
    image: "./img/landing.png",
    title: "Landing Page",
    description: "A normal responsive landing page that every website needed",
  },
  {
    id: 5,
    image: "./img/portfolio.jpg",
    title: "Portfolio Page",
    description:
      "It is this page, i use this to show my skills, bio and resume",
  },
];

const Portfolio = () => {
  const cards = cardsArr;
  return (
    <div id="portfolio">
      <div className="title">
        <h2 className="big-text">PORTFOLIO</h2>
        <h4 className="small-text">My Personal Projects in Details</h4>
        <div className="separator">
          <div className="shape"></div>
        </div>
      </div>
      <div className="portfolio-container">
        {cards.map((card) => {
          return (
            <div className="portfolio-card" key={card.id}>
              <div className="card-image">
                <img src={card.image} alt="image" />
                <div className="card-btn">
                  <button>
                    <a href="">
                      <FaHandPointRight className="icon-white" />
                      Visit
                    </a>
                  </button>
                  <button>
                    <a href="">
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
      </div>
    </div>
  );
};

export default Portfolio;
