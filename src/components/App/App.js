import React, { useState, useEffect, StrictMode } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Zing from "../Zing/Zing";
import AsYouGrowOlderButNeverWiser from "../AsYouGrowOlderButNeverWiser/AsYouGrowOlderButNeverWiser";
import IWillAlwaysThinkOfYouFondly from "../IWillAlwaysThinkOfYouFondly/IWillAlwaysThinkOfYouFondly";
import AhShitHereWeGoAgain from "../AhShitHereWeGoAgain/AhShitHereWeGoAgain";
import FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend from "../FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend";
import DDL from "../DeepDungeon/DeepDungeonLobby/DDL";
import RPS from "../DeepDungeon/RockPaperSS/RPS";
import PolloComic from "../DeepDungeon/PolloComic/PolloComic";
import { css } from "@emotion/css";
import Loading from "../Loading/Loading";
import Landing from "../Landing/Landing";
import Marquee from "../Marquee/Marquee";
import ZingMain from "../ZingMain/ZingMain";
import AsYou from "../AsYou/AsYou";
import IWill from "../IWill/IWill";
import AhShit from "../AhShit/AhShit";
import FriendShip from "../FriendShip/FriendShip";
import DDE from "../DDE/DDE";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFiveSeconds = async () => {
      await new Promise((resolve) => setTimeout(resolve, 8000));
      setLoading(false);
    };
    loadFiveSeconds();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Zing" element={<Zing />} />
        <Route
          path="/AsYouGrowOlderButNeverWiser"
          element={<AsYouGrowOlderButNeverWiser />}
        />
        <Route
          path="/IWillAlwaysThinkOfYouFondly"
          element={<IWillAlwaysThinkOfYouFondly />}
        />
        <Route path="/AhShitHereWeGoAgain" element={<AhShitHereWeGoAgain />} />
        <Route
          path="/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend"
          element={<FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend />}
        />
        <Route path="/TropicalDeepDungeon" element={<DDL />} />
        <Route path="/RPS" element={<RPS />} />
        <Route path="/UncleThongComic" element={<PolloComic />} />

        <Route
          path="/"
          element={
            <div
              className={css`
                display: flex;
                flex-flow: column nowrap;
                height: 100vh;
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
                @media screen and (max-width: 428px) {
                  height: auto;
                }
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
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
