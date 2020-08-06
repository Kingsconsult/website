import React from "react";
import twitter from "../../assets/images/Twitter.png";
import github from "../../assets/images/github3.png";
import linkedin from "../../assets/images/linkedin2.png";
import facebook from "../../assets/images/facebook.png";
import dev from "../../assets/images/dev1.png";

import "./style.css";

function ContactPage() {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <div>
          <h1 className="contact-title">Contact Form</h1>
          <h3>
            You have any Work, related to my field, just fill the form below
          </h3>
        </div>
        <div>
          <form className="contact-form">
            <input
              className="contact-data"
              type="text"
              placeholder="Full name"
            />
            <input
              className="contact-data"
              type="text"
              placeholder="Email Address"
            />
            <input className="contact-data" type="text" placeholder="Subject" />
            <textarea lassName="contact-subject">Message</textarea>
          </form>
        </div>
        <button className="download-button summit-button">Summit </button>
      </div>
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
              <img src={github} alt="github Logo" style={{ height: "35px" }} />
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
  );
}

export default ContactPage;
