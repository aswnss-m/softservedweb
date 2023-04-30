import React from 'react'
import "./Blog.css";
import { Blogs } from '../../assets/Blogs';

function BlogPage(props) {
  return (
    <div className='blogPage'>
      <div className="blogHeader">
        <h4><span className='blogHeaderLogo'>Soft<br />Served<br />Web</span></h4>
        <span className='blogHeaderTitle'>Blogs</span>
        <p className='blogHeaderDescp'>Every now and then, a new technology comes we do a project and we will publish a blog regarding that project or research, so that it becomes easier for you to understand</p>
      </div>
      <div className="blogContent">
        <div className="blogPageTitle">
          {
            Blogs[0].Title
            //props.Title
          }
        </div>
        <div className="blogPageContent">
          {
            Blogs[1].Content
            //props.Content
          }
        </div>
      </div>
    </div>
  )
}

export default BlogPage