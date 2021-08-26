import React from "react";
import data from "../constants/projects.json";

const ProjectsContainer = () => {
  return (
    <div className="projects container section" id="projects">
      <h1> Projects </h1>
      <div className="projects-container">
        {data.map((item, i) => (
          <div key={item.id} className="project">
            <p> {item.title} </p>
            <div className="project-box">
              <img src={item.image} alt="" className="folder" />
              <img src={item.image2} alt="" className="folder" />
              <p className="summary"> {item.summary} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
