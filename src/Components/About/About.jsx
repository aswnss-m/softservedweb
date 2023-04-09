import React from "react";
import "./About.css";

import { tempPic,button } from "../../assets/export";

function About() {
  return (
    <div className="AboutContainer">
      
      <div className="descriptionBox">
        <p className="description">
          With Soft served web, you can easily create and manage your websites
          from start to finish. From the design to the development, Soft served
          web has all the tools you need to make sure your website is up and
          running in no time.
        </p>
        <a href="https://bento.me/aniz">
        <div className="tempbutton">
          <img className = "buttonText" src={button} alt="button" />
        </div>
        </a>
        {/* <button className="buttonBox">Talk Bussiness</button> */}
      </div>
      <div className="rightBox">
        <div className="tempImage">
          <img src={tempPic} alt="Talk Bussiness" />
        </div>
      </div>

    </div>
  );
}

export default About;
