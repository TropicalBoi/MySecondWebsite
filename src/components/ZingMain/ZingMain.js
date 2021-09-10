import React from "react";
import zingLogo from "./ZINGVIDEO.png";
import fishTank from "./FishTankSS.gif";
import smith from "./smith.gif";
import john from "./confuseJohn.gif";
import lzingboi from "./LZINGBOI5.gif";
import "./ZingMain.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class ZingMain extends React.Component {
  render() {
    return (
      <div className="Zing">
        <img src={fishTank} className="FishTankMain" alt="fish tank" />
        <img src={john} className="John" alt="john" />
        <img src={zingLogo} className="ZingLogo" alt="Zing Video" />
        <img src={smith} className="Smith" alt="smith" />
        <p className="Text1">
          Platform and Organization for connect image-movers who didn't commit
          to the standard quality.
        </p>
        <Link to="/Zing">
          <div className="myarrow1">
            <span class="line1"></span>
            <div className="triangle1">
              <span className="left1"></span>
              <span className="right1"></span>
            </div>
          </div>
        </Link>
        <img src={lzingboi} className="LzingBoi" alt="LZINGBOI" />
      </div>
    );
  }
}

export default ZingMain;
