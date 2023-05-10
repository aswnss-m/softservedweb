import React from "react";
import "./Hero.css";
import {
  card101,
  card111,
  card202,
  card222,
  card303,
  card333,
  behance,
  instagram,
  github,
  twitter,
  linkedin,
} from "../../assets/export";
import Projects from "../Projects/Projects";
import Footer from "../Footer/Footer";

function Hero() {
  return (
    <div>

    <div className="HeroSection">
      <div className="TitleContainer">
        <div className="leftContainer">
          <div className="titleMain">
            {/* <h1 className="title Soft">Soft</h1>
            <h1 className="title Serve">Served</h1>
            <h1 className="title Web">Web</h1> */}
            <h1 className="title">
              Soft <br /> Served <br /> Web
            </h1>
          </div>

          <div className="infoBar">
            <a href="">
              <button className="contact">CONTACT</button>
            </a>
            <div className="logos">
              <img src={behance} alt="" className="behance" />
              <img src={twitter} alt="" className="twitter" />
              <img src={linkedin} alt="" className="linkedin" />
              <img src={github} alt="" className="github" />
              <img src={instagram} alt="" className="instagram" />
            </div>
          </div>

        </div>

        <div className="cardContainer">
          <div className="scrollableCardTop">
            <div className="topScroll">
              <img src={card101} alt="" />
              <img src={card111} alt="" />
              <img src={card222} alt="" />
              <img src={card202} alt="" />
              <img src={card303} alt="" />
              <img src={card333} alt="" />
              <img src={card111} alt="" />
              <img src={card101} alt="" />
              <img src={card202} alt="" />
              <img src={card222} alt="" />
              <img src={card333} alt="" />
              <img src={card303} alt="" />
            </div>
            <div className="topScroll">
              <img src={card101} alt="" />
              <img src={card111} alt="" />
              <img src={card222} alt="" />
              <img src={card202} alt="" />
              <img src={card303} alt="" />
              <img src={card333} alt="" />
              <img src={card111} alt="" />
              <img src={card101} alt="" />
            </div>
    
          </div>
        </div>
      </div>
    </div>
    <Projects/>
    
    

    </div>

  );
}

export default Hero;
