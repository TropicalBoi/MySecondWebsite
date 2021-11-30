import React from "react";
import Typewriter from "typewriter-effect";
import "./DDE.css";
import DDEtorch from "./torch.gif";
import { Link } from "react-router-dom";

const DDE = () => {
  return (
    <Link to="/TropicalDeepDungeon">
      <div className="DDE">
        <img src={DDEtorch} className="Torch1" alt="Deep Dungeon Entrance" />
        <Typewriter
          options={{
            strings: [
              "You’ve reached the Bottom!",
              "Next would be the Deep Dungeon.",
              "Enter with caution!",
              "=>>[!]<<=",
            ],
            autoStart: true,
            loop: true,
          }}
        />
        <img src={DDEtorch} className="Torch2" alt="Deep Dungeon Entrance" />
      </div>
    </Link>
  );
};

export default DDE;
