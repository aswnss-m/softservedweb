import React from "react";
import "./About.css";

import { tempPic, button } from "../../assets/export";

function About() {
  return (
    <div className="AboutContainer">
      <div className="descriptionBox">
        <p className="description">
        With Soft served web, you can easily create and manage your websites from start to finish. From the design to the development, Soft served web has all the tools you need to make sure your website is up and running in no time.With Soft served web, you can easily create and manage your websites from start to finish. From the design to the development, Soft served web has all the tools you need to make sure your website is up and running in no time.
        </p>
        <a href="https://bento.me/aniz">
            <button className="myButton">
              <h4>Let's Talk</h4>
  
             
            </button> 
        </a>
      </div>
     
    </div>
  );
}

export default About;
