import React from "react";
import { Link } from "react-router-dom";
import devpic4 from "../../assets/images/devpic4.jpg";
import devpic1 from "../../assets/images/devpic.jpg";
import twitter from "../../assets/images/Twitter.png";
import github from "../../assets/images/github.png";
import linkedin from "../../assets/images/linkedin.png";
import dev from "../../assets/images/dev.png";


let picture = {
  width: "100%",
  height: "80vh",
  backgroundImage: `url(${devpic4})`,
};


function LandingPage() {
  return (
    <div className="devpic" style={picture}>
      <img
        src={twitter}
        alt="Twitter Logo"
        className="twitter"
        style={{ height: "40px" }}
      />
      ;
      <img
        src={github}
        alt="github Logo"
        className="twitter"
        style={{ height: "40px" }}
      />
      ;
      <img
        src={linkedin}
        alt="linkedin Logo"
        className="twitter"
        style={{ height: "40px" }}
      />
      ;
    </div>
  );
}

export default LandingPage;
