import React from "react";
import AhShitGif from "./AhShitGif.gif";
import AhShitFont from "./AhShitFont.png";
import "./AhShit.css";

class AhShit extends React.Component {
  render() {
    return (
      <div className="AhShit">
        <img
          src={AhShitFont}
          className="AhShitFont"
          alt="Ah shit, here we go again."
        />
        <p className="Year4">(2019)</p>
        <p className="Text4">
          As a part of “Experimental Video Art Exhibition, Thai-European
          Friendship 2019 (EVA project)”
        </p>
        <div className="myarrow4">
          <span class="line4"></span>
          <div className="triangle4">
            <span className="left4"></span>
            <span className="right4"></span>
          </div>
        </div>
        <img
          src={AhShitGif}
          className="CoverImg4"
          alt="Ah shit, here we go again."
        />
      </div>
    );
  }
}

export default AhShit;
