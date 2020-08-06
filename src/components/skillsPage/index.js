import React from "react";
import python from "../../assets/images/python.jpg";
import php from "../../assets/images/php.png";
import cakephp from "../../assets/images/cakephp.png";
import css from "../../assets/images/csspng.png";
import django from "../../assets/images/django.png";
import flask from "../../assets/images/flask.png";
import git from "../../assets/images/git.png";
import html from "../../assets/images/html.png";
import javascript from "../../assets/images/javascript.png";
import laravel from "../../assets/images/laravel.png";
import mysql from "../../assets/images/mysql.png";
import postgres from "../../assets/images/postgres.png";
import react from "../../assets/images/react.png";
import github from "../../assets/images/github3.png";

import "./style.css";

function SkillsPage() {
  return (
    <div className="skills-background">
      <div className="title">
        <div className="skills-title">
          <h1>Skills</h1>
        </div>
      </div>
      <div className="skills">
        <div className="skills-content">
          <h3>
            <strong>
              Server side: Python (Flask, Django Frameworks), PHP ( Laravel,
              CakePHP Framework ), JavaScript
            </strong>
          </h3>

          <div className="image-gallery even-spacing">
            <img src={python} alt="Python Logo" style={{ height: "50px" }} />
            <img src={php} alt="PHP Logo" style={{ height: "50px" }} />
            <img src={django} alt="CakePHP Logo" style={{ height: "50px" }} />
            <img src={flask} alt="CakePHP Logo" style={{ height: "50px" }} />
            <img src={cakephp} alt="CakePHP Logo" style={{ height: "50px" }} />
            <img src={laravel} alt="Laravel Logo" style={{ height: "50px" }} />
          </div>
          <h3>
            <strong>
              Front End: (React, HTML 5, CSS with Utility Tools, Responsive
              Website design using Styled Component,Bootstrap Classes and CSS
              Media Queries, Javascript, JQuery)
            </strong>
          </h3>

          <div className="image-gallery even-spacing">
            <img src={react} alt="Python Logo" style={{ height: "50px" }} />
            <img src={html} alt="PHP Logo" style={{ height: "50px" }} />
            <img src={css} alt="CakePHP Logo" style={{ height: "50px" }} />
            <img
              src={javascript}
              alt="javascript Logo"
              style={{ height: "50px" }}
            />
          </div>
          <h3>
            <strong>
              Version Control using Git, Docker understanding of Agile Software
              Development using Project Management tools such as Trello,
              Webservices development, Integration to Payment Gateways
            </strong>
          </h3>

          <div className="image-gallery even-spacing">
            <img src={git} alt="Python Logo" style={{ height: "50px" }} />
            <img src={postgres} alt="PHP Logo" style={{ height: "50px" }} />
            <img src={github} alt="CakePHP Logo" style={{ height: "50px" }} />
            <img src={mysql} alt="CakePHP Logo" style={{ height: "50px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
