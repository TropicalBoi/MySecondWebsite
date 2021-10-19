import React from "react";
import Landing from "../Landing/Landing";
import Marquee from "../Marquee/Marquee";
import ZingMain from "../ZingMain/ZingMain";
import AsYou from "../AsYou/AsYou";
import IWill from "../IWill/IWill";
import AhShit from "../AhShit/AhShit";
import FriendShip from "../FriendShip/FriendShip";
import DDE from "../DDE/DDE";
import { css } from "@emotion/css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../About/About";
import Zing from "../Zing/Zing";
import AsYouGrowOlderButNeverWiser from "../AsYouGrowOlderButNeverWiser/AsYouGrowOlderButNeverWiser";
import IWillAlwaysThinkOfYouFondly from "../IWillAlwaysThinkOfYouFondly/IWillAlwaysThinkOfYouFondly";
import AhShitHereWeGoAgain from "../AhShitHereWeGoAgain/AhShitHereWeGoAgain";
import FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend from "../FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend";

document.body.onmousemove = function (e) {
  document.documentElement.style.setProperty(
    "--x",
    e.clientX + window.scrollX + "px"
  );
  document.documentElement.style.setProperty(
    "--y",
    e.clientY + window.scrollY + "px"
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Zing">
          <Zing />
        </Route>
        <Route path="/AsYouGrowOlderButNeverWiser">
          <AsYouGrowOlderButNeverWiser />
        </Route>
        <Route path="/IWillAlwaysThinkOfYouFondly">
          <IWillAlwaysThinkOfYouFondly />
        </Route>
        <Route path="/AhShitHereWeGoAgain">
          <AhShitHereWeGoAgain />
        </Route>
        <Route path="/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend">
          <FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend />
        </Route>

        <Route path="/">
          <div
            className={css`
              display: flex;
              flex-flow: column nowrap;
              max-height: 100vh;
              width: auto;
              scrollbar-width: none;
              overflow-y: scroll;
              scroll-snap-type: y mandatory;
            `}
          >
            <Landing />
            <Link
              className={css`
                position: fixed;
                height: 0;
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
              <Marquee />
            </Link>
            <ZingMain />
            <AsYou />
            <IWill />
            <AhShit />
            <FriendShip />
            <DDE />
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
