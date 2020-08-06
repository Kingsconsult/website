import React from "react";
import linkedin from "../../assets/images/kings.jpg";

import "./about.css";

function AboutPage() {
  return (
    <div className="about-background">
      <div className="info">
        <div className="picture">
          <div className="pic">
            <img src={linkedin} alt="My pic" className="kings" />
          </div>
        </div>
        <div className="text">
          <div className="first">
            <h1>About Me</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
          <div className="second">
            <div>
              <h2>Contact Details</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown
              </p>
            </div>
            <div>
              <a href="https://docs.google.com/document/d/1jhg8dGrZu-o9k9t9tXVS2xl2I-ykJduYnw4T5ewLlNY/edit?usp=sharing">
                <button className="download-button">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
