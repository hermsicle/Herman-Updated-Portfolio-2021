import React from "react";
import { MyAvatar } from "../components";
import { Link } from "react-scroll";

const LandingContainer = () => {
  return (
    <div className="landing-section" id="home">
      <div className="landing-overlay"></div>
      <div className="landing-inner">
        <MyAvatar
          style={{ width: "200px", height: "200px", marginBottom: "16px" }}
          avatarStyle="transparent"
          topType="ShortHairShortFlat"
          accessoriesType="Blank"
          hairColor="Black"
          facialHairType="Blank"
          clotheType="Hoodie"
          clotheColor="Black"
          eyeType="Happy"
          eyebrowType="DefaultNatural"
          mouthType="Smile"
          skinColor="Pale"
        />
        <div className="flex-row">
          <h3>
            Hi, my name is
            <br />
            <span> Herman Liu. </span>
            <br />I build web apps
          </h3>
        </div>
        <p>
          I'm a web developer based in San Francisco, CA specializing in
          building awesome websites.
        </p>
        <button>
          <Link to="about">Learn More</Link>
        </button>
      </div>
    </div>
  );
};

export default LandingContainer;
