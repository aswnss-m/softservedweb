import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='HeroSection'>
        <div className="container">

 
        <div className="TitleContainer">
            <div className="titleMain">
                <h1 className="title Soft">Soft</h1>
                <h1 className="title Serve">Served</h1>
                <h1 className="title Web">Web</h1>  
            </div>
            <div className="otherDiv">
                <h1>Yet to be decided ! </h1>
            </div>
        </div>
        <div className="ScrollableTile">
            
            <h3 className="info">we make web based solutions</h3>
            <h3 className="info">we make AR based products</h3>
            <h3 className="info">contact us</h3>
            <h3 className="info">made up of pro well experienced developers</h3>

        </div>
        </div>
    </div>
  )
}

export default Hero