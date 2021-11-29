import React, { useState, useEffect, StrictMode } from "react";
import Loading from "../Loading/Loading";
import Landing from "../Landing/Landing";
import Marquee from "../Marquee/Marquee";
import ZingMain from "../ZingMain/ZingMain";
import AsYou from "../AsYou/AsYou";
import IWill from "../IWill/IWill";
import AhShit from "../AhShit/AhShit";
import FriendShip from "../FriendShip/FriendShip";
import DDE from "../DDE/DDE";
import { css } from "@emotion/css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Zing from "../Zing/Zing";
import AsYouGrowOlderButNeverWiser from "../AsYouGrowOlderButNeverWiser/AsYouGrowOlderButNeverWiser";
import IWillAlwaysThinkOfYouFondly from "../IWillAlwaysThinkOfYouFondly/IWillAlwaysThinkOfYouFondly";
import AhShitHereWeGoAgain from "../AhShitHereWeGoAgain/AhShitHereWeGoAgain";
import FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend from "../FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend";
import DDL from "../DeepDungeon/DeepDungeonLobby/DDL";
import RPS from "../DeepDungeon/RockPaperSS/RPS";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiveSeconds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 8000));
      setLoading(false);
    };
    loadFiveSeconds();
  });

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
        <Route path="/TropicalDeepDungeon">
          <DDL />
        </Route>
        <Route path="/RPS">
          <RPS />
        </Route>

        <Route path="/">
          <div
            className={css`
              display: flex;
              flex-flow: column nowrap;
              max-height: 100vh;
              width: auto;
              overflow-x: hidden;
              overflow-y: scroll;
              scroll-snap-type: y mandatory;
              scrollbar-width: thin;
              scrollbar-color: #c4c4c4 #000;
              &::-webkit-scrollbar {
                width: 12px;
              }
              &::-webkit-scrollbar-track {
                background-color: #000;
              }
              &::-webkit-scrollbar-thumb {
                border-radius: 100px;
                background: #c4c4c4;
                border: 2px solid #000;
              }
            `}
          >
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            {loading ? (
              <StrictMode>
                <Loading />
              </StrictMode>
            ) : (
              <>
                <Landing />
                <Marquee />
                <ZingMain />
                <AsYou />
                <IWill />
                <AhShit />
                <FriendShip />
                <DDE />
              </>
            )}
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
