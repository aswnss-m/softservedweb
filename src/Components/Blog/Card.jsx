import React from 'react'
import "./Card.css"
import { boxImage6 } from '../../assets/export'
import {Link} from "react-router-dom"

function Card(props) {
  return (
    <div className='blogCard'>
        <img src={props.img} alt="" className="blogImage" />
        <div className="blogContents">
           <Link to = {`/blogs/${props.id}`} >
              <h3 className="blogTitle">{props.Title}</h3>
           </Link>
            <p className="blogContent">{props.Descp.slice(0,150)}...</p>
            <Link className = "toBlogLink" to={`/Blogs/${props.id}`} >&#8600;</Link>
        </div>
    </div>
  )
}

export default Card