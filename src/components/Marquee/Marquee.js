import React from "react";
import "./Marquee.css";
import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const Marquee = () => {
  return (
    <Link
      className={css`
        position: fixed;
        width: 100%;
        font-family: Montserrat;
        font-style: normal;
        font-weight: 500;
        font-size: 4vh;
        display: flex;
        align-items: flex-end;
        transform: rotate(90deg);
        transform-origin: left bottom;
        white-space: nowrap;
        z-index: 9;
        &:hover {
          text-decoration: none;
        }
      `}
      to="/About"
    >
      <p className="MarqueeP">
        TEWPARI BUALOI - TROPICALBOI - TEWPARI BUALOI - TROPICALBOI - TEWPARI
        BUALOI - TROPICALBOI - TEWPARI BUALOI - TROPICALBOI - TEWPARI BUALOI -
        TROPICALBOI -
      </p>
    </Link>
  );
};

export default Marquee;
