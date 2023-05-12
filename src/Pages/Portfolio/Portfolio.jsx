import React from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { darkSocials } from "../../assets/export.js";
import { anizPic } from "../../assets/portfolioExport";

function Portfolio() {
  return (
    <div>
      <div className="playgroundHeader">
        <Link to="/">
          <h4 className="playgroundHeaderLogo">
            Soft <br /> Served
            <br /> Web
          </h4>
        </Link>
        <h1 className="playgroundHeaderTitle">Minds</h1>
        <p className="playgroundHeaderDescp">
          Every now and then, a new technology comes we do a project and we will
          publish a blog regarding that project or research, so that it becomes
          easier for you to understand
        </p>
      </div>
      <div className="portfolioContainer">
        <div className="portfolioCards">
          <div className="photoAndFrame">
            <img src={anizPic} alt="" className="photo" />
            <div className="darkLogoFrame">
              {darkSocials.map((take) => {
                return (
                  <a href="">
                    <img src={take.src} alt="" className="darkSocialLogo" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="detailsScroll">
            <div className="nameBox">
              <h1>Aniz Bin Nowshad</h1>
            </div>
            <div className="detailsScroll-track">
              <div className="detail whoAmI">
                <h3 className="aboutmeTitle  whoTitle">Who Am I ?</h3>
                <p className="aboutmePara whoPara">
                  I'm a tech enthusiast and problem solver with a passion for
                  DevOps and scripting. With expertise in Python and C++, I
                  specialize in creating efficient and scalable solutions for
                  complex problems. From automating deployments to optimizing
                  workflows, I'm dedicated to streamlining processes for
                  businesses. Take a look at my projects and get in touch to
                  learn more.
                </p>
              </div>

              <div className="detail personalProjects">
                <h3>Projects</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
