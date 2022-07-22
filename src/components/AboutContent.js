import "./Aboutcontentstyles.css"
import React from 'react'
import { Link } from "react-router-dom";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.jpg";
const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>
            I am a react-web devloper,competitive Programmer.I am 3rd year Btech student at Sant Longowal Institute of Engineering and Technology.
        </p>
        <Link to="/Contact">
            <button className="btn">Contact</button>
        </Link>
        </div>
        <div className="right">
           <div className="img-container">
            <div className="img-stack top">
                <img src={react1} className="img" alt="true"/>
            </div>
            <div className="img-stack bottom">
                <img src={react2} className="img" alt="true"/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default AboutContent;