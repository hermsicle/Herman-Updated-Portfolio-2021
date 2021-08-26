import React from "react";
import { MyAvatar } from "../components";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import CopyrightIcon from "@material-ui/icons/Copyright";
const FooterContainer = () => {
  const scrollToTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-overlay"></div>
        <div className="icon-container">
          <MyAvatar
            style={{ width: "200px", height: "200px" }}
            avatarStyle="transparent"
            topType="ShortHairShortFlat"
            accessoriesType="Blank"
            hairColor="Black"
            facialHairType="Blank"
            clotheType="GraphicShirt"
            clotheColor="Black"
            graphicType="Diamond"
            eyeType="Happy"
            eyebrowType="DefaultNatural"
            mouthType="Smile"
            skinColor="Pale"
          />
        </div>
      </div>
      <div className="footer-bottom">
        <div className="icon-container">
          <ArrowForwardIosIcon
            className="arrow-up-icon"
            onClick={scrollToTop}
          />
        </div>
        {/* <div className="policies-container flex-row">
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div> */}
        <div className="rights-container flex-row">
          <p>
            <CopyrightIcon className="copyright-icon" />
            2021 Herman Liu
          </p>
          <p>All rights reserved</p>
        </div>
        <div className="social-container flex-row">
          {/* LinkedIn, YouTube, GitHub */}
          <LinkedInIcon className="social-icon" />
          <YouTubeIcon className="social-icon" />
          <GitHubIcon className="social-icon" />
        </div>
      </div>
    </div>
  );
};

export default FooterContainer;
