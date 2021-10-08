import React from "react";
import logo from "../Landing/logo.svg";
import Aboutvideo from "./WebTewAboutLanding.mp4";
import "./About.css";

import { Player } from "video-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="AboutPage">
      <div className="AboutHead">
        <Link className="Works" to="/">
          <p>WORKS</p>
        </Link>
        <div className="Logo">
          <img src={logo} className="Tew-logo" alt="logo" />
          <Player
            className="AboutVideo"
            autoPlay={true}
            loop={true}
            muted={true}
            fluid={false}
            src={Aboutvideo}
            type="video/mp4"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
