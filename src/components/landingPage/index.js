import React from "react";
import { Link } from "react-router-dom";
import twitter from "../../assets/images/Twitter.png";
import github from "../../assets/images/github3.png";
import linkedin from "../../assets/images/linkedin2.png";
import facebook from "../../assets/images/facebook.png";
import dev from "../../assets/images/dev1.png";

import "./style.css";

function LandingPage() {
  return (
    <div className="backgroundImg">
      <div className="hero">
        <h1 className="heroName">I'm Kingsley Okpara</h1>
        <p className="heroText">
          I am Kingsley Okpara, a Python Fullstack Web developer, I also have
          extensive knowledge and experience with PHP and JavaScript while
          working on applications developed with PHP and JavaScript frameworks.
          I am fascinated with computer technologies and programming is my
          passion, I always have the dream of developing the technologies I used
          and can make the world a better place. A fast learner and a team
          player, who picks languages, frameworks, and technologies in a little
          time and worked comfortably with them. I have worked on applications
          in Django (Python), Flask (Python), React (JavaScript), VanillaJs
          (JavaScript), CakePHP (PHP), Laravel (PHP), and comfortable with
          technologies like Docker, Heroku, etc. I write reusable codes, also
          writing test to make sure the codes never breaks in production and
          follows the programming principles like the SOLID Design principles,
          DRY principle, the atomic design, etc.
        </p>
        <div className="social">
          <ul className="socialLinks">
            <li>
              <a href="https://twitter.com/KingsOkpara">
                <img
                  src={twitter}
                  alt="Twitter Logo"
                  style={{ height: "35px" }}
                />
              </a>
            </li>
            <li>
              <a href="https:github.com/kingsconsult">
                <img
                  src={github}
                  alt="github Logo"
                  style={{ height: "35px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kingsley-okpara-37532b70/">
                <img
                  src={linkedin}
                  alt="linkedin Logo"
                  style={{ height: "35px" }}
                />
              </a>
            </li>
            <li>
              <a href="https://dev.to/kingsconsult">
                <img src={dev} alt="dev Logo" style={{ height: "35px" }} />
              </a>
            </li>
            <li>
              <a href="https://web.facebook.com/kingsley.k.okpara">
                <img
                  src={facebook}
                  alt="facebook Logo"
                  style={{ height: "35px" }}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
