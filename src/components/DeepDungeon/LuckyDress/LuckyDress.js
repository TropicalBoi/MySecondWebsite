import React, { useState, useEffect } from "react";
import "./LuckyDress.css";
import SunCalc from "suncalc";
import OrangeCat from "./OrangeCat";
import Fortune from "./FortuneForetold";
import Div100vh from "react-div-100vh";

const LuckyDress = () => {
  const [ascending, setAscending] = useState(true);
  const [lunarDate, setLunarDate] = useState();
  const [moonDate, setMoonDate] = useState();

  const date = new Date();

  const moon = SunCalc.getMoonIllumination(date);

  const determineLunarDate = () => {
    const roundMoonDate = Math.round(moon.phase / 0.0333333333 + 1);

    setMoonDate(roundMoonDate);

    if (roundMoonDate > 15) {
      setLunarDate(roundMoonDate - 15);
      setAscending(false);
      return;
    }
    setLunarDate(roundMoonDate);

    return;
  };

  const fetch = () => {
    determineLunarDate();
  };

  useEffect(() => {
    fetch();
  });

  return (
    <Div100vh>
      <div className="luckyDress">
        <div className="luckyMainBody">
          <div className="LunarDate">
            <p className="ascending">{ascending ? "ขึ้น" : "แรม"}</p>
            <div className="moonDate">
              <p className="LunarDateCount">{lunarDate}</p>
              <p className="night">ค่ำ</p>
            </div>
          </div>

          <OrangeCat />
          <div className="fortuneFortold">
            <p>
              {ascending ? "ขึ้น" : "แรม"} {lunarDate} ค่ำ
            </p>
            <p> {moonDate ? Fortune[moonDate] : ""} </p>
          </div>
        </div>
      </div>
    </Div100vh>
  );
};

export default LuckyDress;
