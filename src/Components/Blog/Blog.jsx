import React from "react";
import "./Blog.css";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Blogs } from "../../assets/Blogs";
function Blog() {
  return (
    <div className="blogContainer">

  
    <div className="blogPage">
      <div className="blogHeader">
        <Link to="/">
          <h4 className="blogHeaderLogo">
            Soft <br/> Served<br/> Web
          </h4>
        </Link>
        <h1 className="blogHeaderTitle">Blogs</h1>
        <p className="blogHeaderDescp">
          Every now and then, a new technology comes we do a project and we will
          publish a blog regarding that project or research, so that it becomes
          easier for you to understand
        </p>
      </div>

      <div className="blogCards">
        {Blogs.map((item, index) => {
          return (
            <Card
              Title={item.Title}
              Descp={item.Content}
              id={item.id}
              img={item.image}
            />
          );
        })}
      </div>
    </div>
    </div>
  );
}

export default Blog;
