import React from "react";
import logo from "./logo.svg";
import logoScale from "./logoScale.svg";
import logoScale2 from "./logoScale2.svg";
import landingvideo from "./WebtewLanding10mbNoSound.mp4";
import "./Landing.css";
import { Player } from "video-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="Landing">
      <Link className="About" to="/About">
        <p>ABOUT</p>
      </Link>
      <div className="Logo">
        <img src={logoScale} className="Logo-scale" alt="logo" />
        <img src={logoScale2} className="Logo-scale2" alt="logo" />
        <img src={logo} className="Tew-logo" alt="logo" />
        <Player
          className="Video"
          autoPlay={true}
          loop={true}
          muted={true}
          fluid={false}
          src={landingvideo}
          type="video/mp4"
        />
      </div>
    </div>
  );
};

export default Landing;
