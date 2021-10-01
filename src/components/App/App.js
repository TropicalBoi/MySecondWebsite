import React from "react";
import Landing from "../Landing/Landing";
import Marquee from "../Marquee/Marquee";
import ZingMain from "../ZingMain/ZingMain";
import AsYou from "../AsYou/AsYou";
import IWill from "../IWill/IWill";
import AhShit from "../AhShit/AhShit";
import FriendShip from "../FriendShip/FriendShip";
import DDE from "../DDE/DDE";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Zing from "../Zing/Zing";
import AsYouGrowOlderButNeverWiser from "../AsYouGrowOlderButNeverWiser/AsYouGrowOlderButNeverWiser";
import IWillAlwaysThinkOfYouFondly from "../IWillAlwaysThinkOfYouFondly/IWillAlwaysThinkOfYouFondly";
import AhShitHereWeGoAgain from "../AhShitHereWeGoAgain/AhShitHereWeGoAgain";
import FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend from "../FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend";

const App = () => {
  return (
    <Router>
      <Switch>
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
          <div className="App">
            <Landing />
            <Marquee />
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
