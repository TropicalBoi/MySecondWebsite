import React from "react";
import IWillCovImg from "./IWillCoverImg.jpg";
import IWillFont from "./IWillFont.png";
import "./IWill.css";

class IWill extends React.Component {
  render() {
    return (
      <div className="IWill">
        <img
          src={IWillFont}
          className="IWillFont"
          alt="I will always think of you fondly."
        />
        <p className="Year3">(2019)</p>
        <p className="Text3">
          A series of 6 pieces in collaboration with Wasawat Somno.
        </p>
        <div className="myarrow3">
          <span class="line3"></span>
          <div className="triangle3">
            <span className="left3"></span>
            <span className="right3"></span>
          </div>
        </div>
        <img
          src={IWillCovImg}
          className="CoverImg3"
          alt="I will always think of you fondly."
        />
      </div>
    );
  }
}

export default IWill;
