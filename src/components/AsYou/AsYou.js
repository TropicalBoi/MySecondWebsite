import React from "react";
import AsYouCov from "./AsYouCoverImg.jpg";
import AsYouFont from "./AsYouFont.png";
import "./AsYou.css";

class AsYou extends React.Component {
  render() {
    return (
      <div className="AsYou">
        <img
          src={AsYouFont}
          className="AsYouFont"
          alt="As you grow older but never wiser."
        />
        <p className="Year2">(2019)</p>
        <p className="Text2">
          As a part of “หลุย Louie!: Attitude Against Failure” group exhibition
        </p>
        <div className="myarrow2">
          <span class="line2"></span>
          <div className="triangle2">
            <span className="left2"></span>
            <span className="right2"></span>
          </div>
        </div>
        <img
          src={AsYouCov}
          className="CoverImg2"
          alt="As you grow older but never wiser."
        />
      </div>
    );
  }
}

export default AsYou;
