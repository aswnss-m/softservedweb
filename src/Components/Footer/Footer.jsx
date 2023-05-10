import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  behance,
  twitter,
  linkedin,
  github,
  instagram,
} from "../../assets/export";

function Footer() {
  return (
    <div className="footer">
      <div className="contactContainer">
        <div className="contactContent">
          <h2>Want to work together ?</h2>
          <p>
            Feel free to reach out for collaborations or just a friendly hello
            and contact us for our services example@gmail.com
          </p>
        </div>
        <div className="ContactBar">
          <a href="">
            <button className="contactFooter">CONTACT</button>
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
      <div className="footerSection">
        <div className="footerPart1">
          <a href="">
            {" "}
            <h3>Disclaimer</h3>
          </a>
        </div>
        <div className="footerPart2">
          <a href="">
            <h3>softservedweb@gmail.com</h3>
          </a>
        </div>
        <div className="footerPart3">
          <a href=""></a>
          <a href="/Blogs">
            <h3 className="bio part31">Blog</h3>
          </a>
          <a href="">
            {" "}
            <h3 className="bio part32">Our Works</h3>
          </a>
          <a href="">
            {" "}
            <h3 className="bio part33">About</h3>
          </a>
        </div>
        <div className="footerPart4">
          <a href="">
            {" "}
            <h3 className="socials part41">Twitter</h3>
          </a>
          <a href="">
            {" "}
            <h3 className="socials part42">Instgram</h3>
          </a>
          <a href="">
            {" "}
            <h3 className="socials part43">Github</h3>
          </a>
          <a href="">
            {" "}
            <h3 className="socials part44">Instgram</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
