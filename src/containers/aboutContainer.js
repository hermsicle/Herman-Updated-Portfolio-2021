import React from "react";
import { Link } from "react-scroll";

const AboutContainer = () => {
  return (
    <div className="about container section" id="about">
      {/* <h1>Who Am I?</h1> */}
      <div className="about-inner-container">
        <div className="summary">
          <p>
            Hello! I’m Herman, a web developer based in
            <span> San Francisco, CA.</span>
          </p>
          <p>
            I have a <span>B.A. in Criminal Justice Studies </span>from
            <span> San Francisco State University </span> and a
            <span> full stack web development certificate</span> from
            <span> UC Berkeley.</span>
          </p>
          <p>
            I decided to take a leap of faith and enrolled in a bootcamp. It was
            a life changing experience. I learned so many new technologies, met
            a lot of awesome people, and most importantly, found something I
            really enjoy doing.
          </p>
          <p>
            Since then, I have enjoyed creating clean, elegant, and creative web
            applications. I mainly focus on front end web development. The core
            technologies I use are Javascript and React JS. I am currently
            looking for employment/contract work, so if you like what you see,
            please feel free to
            <span className="contact-link">
              <Link to="contact"> contact me</Link>
            </span>
            .
          </p>
        </div>
        <div className="image-container">
          <div className="image-overlay"></div>
          <img src="/assets/images/herman.PNG" alt="herman" />
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
