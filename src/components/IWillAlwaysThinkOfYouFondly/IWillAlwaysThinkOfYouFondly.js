import React from "react";
import "./IWillAlwaysThinkOfYouFondly.css";
import HorizontalScroll from "react-scroll-horizontal";
import { HashLink } from "react-router-hash-link";

const IWillAlwaysThinkOfYouFondly = () => {
  return (
    <div className="IWillContent">
      <HashLink to="/#IWill">
        <div className="BackArrowIWill">
          <div className="triangleBIWill">
            <span className="leftBIWill"></span>
            <span className="rightBIWill"></span>
          </div>
          <span class="lineBIWill"></span>
        </div>
      </HashLink>
      <HorizontalScroll>
        <div className="IWillContent1"></div>
      </HorizontalScroll>
    </div>
  );
};

export default IWillAlwaysThinkOfYouFondly;
