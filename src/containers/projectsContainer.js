import React from "react";
import data from "../constants/projects.json";
import Tooltip from "@material-ui/core/Tooltip";

const ProjectsContainer = () => {
  const goToLink = (url) => {
    console.log("clicked");
    window.open(url, "_blank");
  };

  return (
    <div className="projects container section" id="projects">
      <h1> Projects </h1>
      <div className="projects-container">
        {data.map((item, i) => (
          <div key={item.id} className="project">
            <div
              className={
                item.direction === "row" ? "project-box" : "project-box reverse"
              }
            >
              <div className="project-left">
                <div className="flex-row">
                  <p className="title"> {item.title} </p>
                  <div className="project-links">
                    <Tooltip title="Demo" placement="top">
                      <a hRef={item.demo} target="_blank">
                        <img src={item.image} alt="" className="folder" />
                      </a>
                    </Tooltip>
                    <Tooltip
                      title={item.git ? "Code" : "Location"}
                      placement="top"
                    >
                      <a
                        hRef={item.git ? item.git : item.location}
                        target="_blank"
                      >
                        <img src={item.image2} alt="" className="folder" />
                      </a>
                    </Tooltip>
                  </div>
                </div>
                <p className="summary"> {item.summary} </p>
                <p className="technologies"> Technologies: {item.tech} </p>
              </div>
              <div className="project-right">
                <div
                  className="overlay"
                  onClick={() => goToLink(item.demo)}
                ></div>
                <img src={item.background} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsContainer;
