import React from "react";
import "./Projects.css";
import {
  boxImage1,
  boxImage2,
  boxImage3,
  boxImage4,
  boxImage5,
  boxImage6,
} from "../../assets/export";

function Projects() {
  return (
    <div className="projectSection">
      <div className="projectContainer">
        <div className="firstRow">
          <div className="colBox1">
            <div className="box box1">
                <div class="overlay"></div>
              <img src={boxImage1} alt="" />
              <div className="textLayer">
                <p className="smallDesc">Recent Project.Suee Store</p>
                <p>Aniz BIn Nowshad</p>
              </div>
              
            </div>

            <div className="box box2">
                <div class="overlay"></div>
              <img src={boxImage2} alt="" />

              <div className="textLayer">
                <p className="smallDesc">Recent Project.Suee Store</p>
                <p>Aniz BIn Nowshad</p>
              </div>

            </div>
          </div>

          <div className="box box3">
            <div class="overlay"></div>
            <img src={boxImage3} alt="" />

            <div className="textOverlay">
            <div className="textLayer">
                <p className="smallDesc">Recent Project.Suee Store</p>
                <p>Aniz BIn Nowshad</p>
              </div>
              
            </div>
          </div>
        </div>

        <div className="secondRow">
          <div className="box box3">
            <div class="overlay"></div>
            <img src={boxImage4} alt="" />
            <div className="textLayer">
                <p className="smallDesc">Recent Project.Suee Store</p>
                <p>Aniz BIn Nowshad</p>
              </div>
              
          </div>

          <div className="colBox2">
            <div className="box box2">
                <div class="overlay"></div>
              <img src={boxImage5} alt="" />
              <div className="textLayer">
                <p className="smallDesc">Recent Project.Suee Store</p>
                <p>Aniz BIn Nowshad</p>
              </div>
              
            </div>
            <div className="box box1">
                <div class="overlay"></div>
              <img src={boxImage6} alt="" />
              <div className="textLayer">
                <p  className="smallDesc">Recent Project.Suee Store</p>
                <p>Aniz BIn Nowshad</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
