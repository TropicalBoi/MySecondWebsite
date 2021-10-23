import React, { useState, useEffect, StrictMode } from "react";
import Loading from "../Loading/Laoding";
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

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiveSeconds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 5000));
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
