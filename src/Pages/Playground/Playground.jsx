import React from "react";
import "./Playground.css";
import { Link } from "react-router-dom";
import { playground } from "../../assets/playgroundExport";
import { github } from "../../assets/export";

function Playground() {
  return (
    <div>
      <div className="playgroundHeader">
        <Link to="/">
          <h4 className="playgroundHeaderLogo">
            Soft <br /> Served
            <br /> Web
          </h4>
        </Link>
        <h1 className="playgroundHeaderTitle">Playground</h1>
        <p className="playgroundHeaderDescp">
          Every now and then, a new technology comes we do a project and we will
          publish a blog regarding that project or research, so that it becomes
          easier for you to understand
        </p>
      </div>

      <div className="projectCardContainer">
        {playground.map((item) => {
          return (
            <div className="projectCard">
              <img className="projectImage" src={item.image} alt="" />
              <div className="projectContentBox">
                <h2 className="projectHeading">{item.title}</h2>
                <br />
                <p className="projectDesc"> {item.content}</p>
                <div className="projectLinks">
                    <img src={github} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Playground;
