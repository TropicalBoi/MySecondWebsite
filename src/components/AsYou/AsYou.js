import React from "react";
import AsYouCov from "./AsYouCoverImg.jpg";
import AsYouFont from "./AsYouFont.png";
import "./AsYou.css";
import { Link } from "react-router-dom";

const AsYou = () => {
  return (
    <div className="AsYou" id="AsYou">
      <img
        src={AsYouFont}
        className="AsYouFont"
        alt="As you grow older but never wiser."
      />
      <p className="Year2">(2019)</p>
      <p className="Text2">
        As a part of “หลุย Louie!: Attitude Against Failure” group exhibition
      </p>
      <img
        src={AsYouCov}
        className="CoverImg2"
        alt="As you grow older but never wiser."
      />
      <Link to="/AsYouGrowOlderButNeverWiser">
        <div className="myarrow2">
          <span class="line2"></span>
          <div className="triangle2">
            <span className="left2"></span>
            <span className="right2"></span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AsYou;
