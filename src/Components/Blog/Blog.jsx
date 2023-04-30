import React from 'react'
import "./Blog.css"
import Card from './Card'
import { Blogs } from '../../assets/Blogs'
function Blog() {
  return (
    <div className='blogPage'>
      <div className="blogHeader">
        <h4><span className='blogHeaderLogo'>Soft<br />Served<br />Web</span></h4>
        <span className='blogHeaderTitle'>Blogs</span>
        <p className='blogHeaderDescp'>Every now and then, a new technology comes we do a project and we will publish a blog regarding that project or research, so that it becomes easier for you to understand</p>
      </div>
      <div className="blogCards">
          {Blogs.map((item)=>{
           return <Card Title={item.Title} Descp = {item.Content}/>
            console.log(item.Title);
          })}
      </div>
    </div>
  )
}

export default Blog