import React from "react";
import { MyAvatar } from "../components";
import { Link } from "react-scroll";

const LandingContainer = () => {
  return (
    <div className="landing-section" id="home">
      <div className="landing-overlay"></div>
      <div className="landing-inner">
        <MyAvatar />
        <h1> Hello, Welcome! </h1>
        <h3>
          I am <span>Herman Liu</span>, a full stack web developer focused on
          creating awesome web apps!
        </h3>
        <button>
          <Link to="about">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingContainer;
