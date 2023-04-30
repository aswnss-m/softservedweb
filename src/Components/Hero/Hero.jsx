import React from "react";
import "./Hero.css";
import About from "../About/About";
import Projects from "../Projects/Projects";
import {
  card101,
  card111,
  card202,
  card222,
  card303,
  card333,
} from "../../assets/export";

function Hero() {
  return (
    <div className="HeroSection">
      {/* <div className="otherDiv">
          <div className="scene">
            <div className="wrapper">
              <ul className="ball">
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
                <li className="ring"></li>
              </ul>
            </div>
          </div>
        </div> */}

      <div className="container">
        <div className="TitleContainer">
          <div className="titleMain">
            <h1 className="title Soft">Soft</h1>
            <h1 className="title Serve">Served</h1>
            <h1 className="title Web">Web</h1>
          </div>

          <div className="cardContainer">
            <div className="scrollableCardTop">
              <div className="topScroll">
                <img src={card101} alt="" />
                <img src={card111} alt="" />
                <img src={card202} alt="" />
                <img src={card222} alt="" />
                <img src={card303} alt="" />
                <img src={card333} alt="" />
                <img src={card101} alt="" />
                <img src={card111} alt="" />
                <img src={card202} alt="" />
                <img src={card222} alt="" />
                <img src={card303} alt="" />
                <img src={card333} alt="" />
              </div>
              <div className="topScroll">
                <img src={card101} alt="" />
                <img src={card111} alt="" />
                <img src={card202} alt="" />
                <img src={card222} alt="" />
                <img src={card303} alt="" />
                <img src={card333} alt="" />
                <img src={card101} alt="" />
                <img src={card111} alt="" />
     
              </div>
              {/* <div className="topScroll">
                <img src={card101} alt="" />
                <img src={card111} alt="" />
                <img src={card202} alt="" />
                <img src={card222} alt="" />
                <img src={card303} alt="" />
                <img src={card333} alt="" />
                <img src={card333} alt="" />
              </div> */}
            </div>
            {/* <div className="scrollableCardBottom">
              <div className="bottomScroll">
                <img src={card101} alt="" />
                <img src={card111} alt="" />
                <img src={card202} alt="" />
                <img src={card222} alt="" />
                <img src={card303} alt="" />
                <img src={card333} alt="" />
              </div>
              <div className="bottomScroll">
                <img src={card101} alt="" />
                <img src={card111} alt="" />
                <img src={card202} alt="" />
                <img src={card222} alt="" />
                <img src={card303} alt="" />
                <img src={card333} alt="" />
                <img src={card101} alt="" />
              </div>
            </div> */}
          </div>
        </div>

        <div className="ScrollableTile">
          <div className="marquee">
            <a href="">
              {" "}
              <h3 className="info">we make web based solutions</h3>{" "}
            </a>
            <a href="">
              {" "}
              <h3 className="info">get cusotm solutions</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">we make AR based products</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">contact us</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">
                made up of pro well experienced developers
              </h3>
            </a>
          </div>
          <div className="marquee">
            <a href="">
              {" "}
              <h3 className="info">we make web based solutions</h3>{" "}
            </a>
            <a href="">
              {" "}
              <h3 className="info">get cusotm solutions</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">we make AR based products</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">contact us</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">
                made up of pro well experienced developers
              </h3>
            </a>
          </div>
          <div className="marquee">
            <a href="">
              {" "}
              <h3 className="info">we make web based solutions</h3>{" "}
            </a>
            <a href="">
              {" "}
              <h3 className="info">get cusotm solutions</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">we make AR based products</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">contact us</h3>
            </a>
            <a href="">
              {" "}
              <h3 className="info">
                made up of pro well experienced developers
              </h3>
            </a>
          </div>
        </div>
      </div>
      <About />
      <Projects />
    </div>
  );
}

export default Hero;
