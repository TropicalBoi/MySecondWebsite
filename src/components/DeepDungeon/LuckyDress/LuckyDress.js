import React, { useState, useEffect } from "react";
import "./LuckyDress.css";
import SunCalc from "suncalc";

const LuckyDress = () => {
  const [ascending, setAscending] = useState(true);
  const [lunarDate, setLunarDate] = useState();

  const date = new Date();

  const moon = SunCalc.getMoonIllumination(date);

  const moonDate = (number) => {
    return number / 0.0333333333 + 1;
  };

  const determineLunarDate = () => {
    const roundMoonDate = Math.round(moonDate(moon.phase));

    if (roundMoonDate > 15) {
      setLunarDate(roundMoonDate - 15);
      setAscending(false);
      return;
    }
    setLunarDate(roundMoonDate);
  };

  const fetch = () => {
    determineLunarDate();
  };

  useEffect(() => {
    fetch();
  });

  return (
    <div className="luckyDress">
      <div className="luckyMainBody">
        <p className="LuckyDressMainText">
          {" "}
          {ascending ? "ขึ้น" : "แรม"} {lunarDate} ค่ำ{" "}
        </p>
      </div>
    </div>
  );
};

export default LuckyDress;
