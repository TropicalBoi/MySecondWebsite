import React from "react";
import "./Pollo_Comic.css";
import PolloImages from "./PolloImages";

const PolloComic = () => {
  return (
    <div className="comic">
      <div className="big b1">
        <div className="panel1">
          <img className="p1 Roachy1" src={PolloImages.Roachy1} alt="p1" />
          <img className="p1 Sun1" src={PolloImages.Sun1} alt="p1" />
          <img className="p1 Sunray1" src={PolloImages.Sunray1} alt="p1" />
          <img className="p1 BG1" src={PolloImages.BG1} alt="p1" />
        </div>
        <div className="panel2">
          <img className="p2 Roachy2" src={PolloImages.Roachy2} alt="p2" />
          <img className="p2 Sun2" src={PolloImages.Sun2} alt="p2" />
          <img className="p2 Sunray2" src={PolloImages.Sunray2} alt="p2" />
          <img className="p2 Oh2" src={PolloImages.Oh2} alt="p2" />
          <img className="p2 BG2" src={PolloImages.BG2} alt="p2" />
        </div>
      </div>
      <div className="panel3">
        <img className="p3 Sword" src={PolloImages.Sword3} alt="p3" />
        <img className="p3 Wink3" src={PolloImages.Wink3} alt="p3" />
        <img className="p3 BG3" src={PolloImages.BG3} alt="p3" />
      </div>
      <div className="big b2">
        <div className="big b3">
          <div className="panel4">
            <img className="p4 Oh4" src={PolloImages.Oh4} alt="p4" />
            <img className="p4 BG4" src={PolloImages.BG4} alt="p4" />
          </div>
          <div className="panel5">
            <img className="p5" src={PolloImages.Frame5} alt="p5" />
          </div>
          <div className="panel6">
            <img className="p6 Sparkle6" src={PolloImages.Sparkle6} alt="p6" />
            <img className="p6 Wink6" src={PolloImages.Wink6} alt="p6" />
          </div>
          <div className="panel7">
            <img className="p7" src={PolloImages.Frame7} alt="p7" />
          </div>
        </div>
        <div className="panel8">
          <img className="p8 onBG Roachy8" src={PolloImages.Roachy8} alt="p8" />
          <img className="p8 onBG Wink8" src={PolloImages.Wink8} alt="p8" />
          <img className="p8 onBG Shwink8" src={PolloImages.Shwink8} alt="p8" />
          <img className="p8 BG8" src={PolloImages.BG8} alt="p8" />
        </div>
      </div>
      <div className="panel9">
        <img className="p9 Bubble9" src={PolloImages.Bubble9} alt="p9" />
        <img className="p9 BG9" src={PolloImages.BG9} alt="p9" />
      </div>
      <div className="panel10">
        <img className="p10 BG10" src={PolloImages.BG10} alt="p10" />
        <img className="p10 onBG Sunny10" src={PolloImages.Sunny10} alt="p10" />
        <img className="p10 onBG Day10" src={PolloImages.Day10} alt="p10" />
        <img className="p10 onBG Dream10" src={PolloImages.Dream10} alt="p10" />
      </div>
    </div>
  );
};

export default PolloComic;
