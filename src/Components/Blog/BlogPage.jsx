import React from 'react'
import "./Blog.css";
import { Blogs } from '../../assets/Blogs';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function BlogPage(props) {
  const {id} = useParams();
  const blogpost = Blogs[id]
  return (
    <div className='blogPage'>
      <div className="blogHeader">
        <Link to="/">
          <h4><span className='blogHeaderLogo'>Soft<br />Served<br />Web</span></h4>
        </Link>
       <Link to = "/Blogs">
       <h1 className="blogHeaderTitle">Blogs</h1>
       </Link>
        <p className='blogHeaderDescp'>Every now and then, a new technology comes we do a project and we will publish a blog regarding that project or research, so that it becomes easier for you to understand</p>
      </div>
      <div className="blogContent">
        <div className="blogPageTitle">
          {
            blogpost.Title
            //props.Title
          }
        </div>
        <div className="blogPageContent">
          {
            blogpost.Content
            //props.Content
          }
        </div>
      </div>
    </div>
  )
}

export default BlogPage