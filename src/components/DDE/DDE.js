import React from "react";
import Typewriter from "typewriter-effect";
import "./DDE.css";
import DDEtorch from "./torch.gif";
import { css } from "@emotion/css";
// import { Link } from "react-router-dom";

const DDE = () => {
  return (
    // <Link to="/TropicalDeepDungeon">
    <div className="DDE">
      <img src={DDEtorch} className="Torch1" alt="Deep Dungeon Entrance" />
      <Typewriter
        options={{
          strings: [
            "You’ve reached the Bottom!",
            "Next would be the Deep Dungeon.",
            "Coming very soon!",
            "<3<3<3",
          ],
          autoStart: true,
          loop: true,
        }}
      />
      <img src={DDEtorch} className="Torch2" alt="Deep Dungeon Entrance" />
    </div>
    // </Link>
  );
};

export default DDE;
