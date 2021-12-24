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
    <div className="background-img">
      <div className="hero">
        <h1 className="hero-name">I'm Kingsley Okpara</h1>
        <p className="hero-text">
          I am Kingsley Okpara, a PHP Fullstack Web developer, I also have
          extensive knowledge and experience with Python, JavaScript and Golang while
          working on applications developed with Python, JavaScript frameworks and Go.
          I am fascinated with computer technologies and programming is my
          passion. A fast learner and a team
          player, who picks languages, frameworks, and technologies in a little
          time and worked comfortably with them. I have worked on applications
          inLaravel (PHP), Django (Python), Odoo (Python), Flask (Python), React (JavaScript), VanillaJs
          (JavaScript), CakePHP (PHP),  and comfortable with
          technologies like Docker, Heroku, etc. I write reusable codes, also
          writing test to make sure the codes never breaks in production and
          follows the programming principles like the SOLID Design principles,
          DRY principle, the atomic design, etc.
        </p>
        <div className="social">
          <ul className="social-links">
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
