import React from "react";
import { Link } from "react-scroll";

const AboutContainer = () => {
  return (
    <div className="about container section" id="about">
      <h1>My Story</h1>
      <div className="about-inner-container">
        <div className="summary">
          <p>
            Hello, I am Herman, a full-stack developer based in San Francisco!
          </p>
          <p>
            I am a big believer in being a lifelong learner. I love learning new
            technologies and applying what I learn by building projects. What I
            love most about programming is it pushes my mind to the absolute
            limits! I love the struggle and find it super rewarding when I
            figure something out through trial and error. I have a strong
            passion for building web applications from the ground up from design
            to development.
          </p>
          <p>
            Hobbies include cooking healthy recipes, long drives, reading
            self-improvement books, learning new technologies, and working out.
            I have recently started to integrate mediation into my morning
            routine as well!
          </p>
          <p>
            I am currently looking for work as a developer, so please feel free
            to
            <span className="contact-link">
              <Link to="contact"> contact me 🙂</Link>
            </span>
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
