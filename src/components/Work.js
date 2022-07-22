import "./Workcartstyles.css"

import WorkCart from "./WorkCart";
import ProjectCardData from "./WorkCardData";
import React from 'react'
const Work = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Projects</h1>
        <div className="project-container">
        {ProjectCardData.map((val,ind) => {
            return (
                <WorkCart 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                />
            );
        })}
        </div>
    </div>
  )
}

export default Work;