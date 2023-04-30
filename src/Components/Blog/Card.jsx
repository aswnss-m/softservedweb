import React from 'react'
import "./Card.css"
import { boxImage6 } from '../../assets/export'

function Card(props) {
  return (
    <div className='blogCard'>
        <img src={boxImage6} alt="" className="blogImage" />
        <div className="blogContents">
            <h3 className="blogTitle">{props.Title}</h3>
            <p className="blogContent">{props.Descp.slice(0,150)}...</p>
            <button type = 'button' className="arrow" onClick={()=>{
                alert("CLIKK")
            }} >&#8600;</button>
        </div>
    </div>
  )
}

export default Card