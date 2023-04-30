import React from "react";
import './Footer.css'
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerSection">
      <div className="footerPart1">
      <a href=""> <h3>Disclaimer</h3></a>
      </div>
      <div className="footerPart2">
      <a href=""><h3>softservedweb@gmail.com</h3></a>
      </div>
      <div className="footerPart3">
        <a href=""></a>
        <a href="/Blogs"><h3 className="bio part31">Blog</h3></a>
        <a href=""> <h3 className="bio part32">Our Works</h3></a>
        <a href=""> <h3 className="bio part33">About</h3></a>
      </div>
      <div className="footerPart4">
      <a href=""> <h3 className="socials part41">Twitter</h3></a>
      <a href=""> <h3 className="socials part42">Instgram</h3></a>
      <a href=""> <h3 className="socials part43">Github</h3></a>
      <a href=""> <h3 className="socials part44">Instgram</h3></a>
      </div>
    </div>
  );
}

export default Footer;
