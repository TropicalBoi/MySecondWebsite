import React from "react";
import "./Zing.css";
import HorizontalScroll from "react-scroll-horizontal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../App/App";
import zingLogo from "./ZING_LOGO.png";
import gengar from "./Gengar.jpg";
import FishTankOpencall from "./FishTank/FishTankOpencall.jpg";
import FishTankLogo from "./FishTank/FishTankLogo.png";
import FishTankPic1 from "./FishTank/Fish_Tank_01.jpg";
import FishTankPic2 from "./FishTank/Fish_Tank_02.jpg";
import FishTankPic3 from "./FishTank/Fish_Tank_03.jpg";
import FishTankPic4 from "./FishTank/Fish_Tank_04.jpg";
import FishTankPic5 from "./FishTank/Fish_Tank_05.jpg";
import FishTankPic6 from "./FishTank/Fish_Tank_06.jpg";
import FishTankPic7 from "./FishTank/Fish_Tank_07.jpg";
import FishTankPic8 from "./FishTank/Fish_Tank_08.jpg";
import TankTube from "./FishTank/FishTankGif/TankTube.gif";
import FishGang from "./FishTank/FishTankGif/FishGang.gif";
import BigTank from "./FishTank/FishTankGif/BigTank.gif";
import guppy1 from "./FishTank/FishTankGif/guppy1.gif";
import guppy2 from "./FishTank/FishTankGif/guppy2.gif";
import guppy3 from "./FishTank/FishTankGif/guppy3.gif";
import guppy4 from "./FishTank/FishTankGif/guppy4.gif";
import guppy5 from "./FishTank/FishTankGif/guppy5.gif";
import guppy6 from "./FishTank/FishTankGif/guppy6.gif";
import guppy7 from "./FishTank/FishTankGif/guppy7.gif";
import guppy8 from "./FishTank/FishTankGif/guppy8.gif";
import TV from "./FishTank/FishTankGif/TV.png";
import bubble from "./FishTank/FishTankGif/Bubble.gif";
import weed1 from "./FishTank/FishTankGif/Weed1.gif";
import weed2 from "./FishTank/FishTankGif/Weed2.gif";

class Zing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/Main">
            <Home />
          </Route>

          <div className="ZingContent">
            <Link to="/Main">
              <div className="BackArrow">
                <div className="triangleB">
                  <span className="leftB"></span>
                  <span className="rightB"></span>
                </div>
                <span class="lineB"></span>
              </div>
            </Link>
            <HorizontalScroll>
              <div className="Zing1">
                <img src={zingLogo} className="ZingVLogo" alt="Zing Video" />
                <img src={gengar} className="Gengar" alt="GENGAR!" />
                <p className="Header">ZING</p>
                <div className="TextZingC">
                  <p className="TextBox">
                    “ZING”, a term used by a sub-cultural group of Thai
                    teenagers to define anything that exceeds or is an
                    exaggeration of the norm, the default. Commonly used to
                    refer to engines customized to go faster and harder.
                  </p>
                  <p className="TextBox">
                    “ZING VIDEO” then is a video, a moving image, a film that is
                    rad. Ones that exceeds the normal definition of a video.
                  </p>
                  <p className="TextBox">
                    With this ethos, our team comes together with a spirit of
                    resistance against all that is factory setting, of the
                    default. Bringing together a community with a commitment to
                    innovating moving images. ZING VIDEO is an exhibition
                    platform for all those interested in the subject, no matter
                    the practice. We welcome those from all fields, whether it
                    be an animator, designer, vlogger, and etc.
                  </p>
                </div>
              </div>
              <div className="FishTank">
                <img src={TankTube} className="TankTube" alt="Fish Tank" />
                <img src={FishGang} className="FishGang" alt="Fish Tank" />
                <img src={BigTank} className="BigTank" alt="Fish Tank" />
                <img src={guppy1} className="guppy1-1" alt="Fish Tank" />
                <img src={guppy8} className="guppy2-8" alt="Fish Tank" />
                <img src={guppy7} className="guppy3-7" alt="Fish Tank" />
                <img src={guppy2} className="guppy4-2" alt="Fish Tank" />
                <img src={guppy4} className="guppy5-4" alt="Fish Tank" />
                <img src={guppy3} className="guppy6-3" alt="Fish Tank" />
                <img src={guppy5} className="guppy7-5" alt="Fish Tank" />
                <img src={guppy6} className="guppy8-6" alt="Fish Tank" />
                <img src={guppy4} className="guppy9-4" alt="Fish Tank" />
                <img src={guppy3} className="guppy10-3" alt="Fish Tank" />
                <img src={guppy8} className="guppy11-8" alt="Fish Tank" />
                <img src={guppy1} className="guppy12-1" alt="Fish Tank" />
                <img src={guppy7} className="guppy13-7" alt="Fish Tank" />
                <img src={weed1} className="weed1" alt="Fish Tank" />
                <img src={weed2} className="weed2" alt="Fish Tank" />
                <img src={TV} className="TV" alt="Fish Tank" />
                <img src={bubble} className="bubble" alt="Fish Tank" />
                <img
                  src={FishTankOpencall}
                  className="FishTankOpencall"
                  alt="Fish Tank Open call"
                />
                <img
                  src={FishTankLogo}
                  className="FishTankLogo"
                  alt="Fish Tank"
                />
                <p className="FishTankText1">
                  Our first project, “Fish tank” originates from our interest in
                  a contained ecosystem that serves as a decor like those in a
                  restaurant. A glass cage for entertainment which exists in
                  various public places, existing only to be observed. We have
                  created an ecosystem of a fish tank and installed a screen
                  within it. Situated on the second-floor dining area of a
                  restaurant.
                </p>
                <img
                  src={FishTankPic1}
                  className="FishTankPic1"
                  alt="Fish Tank"
                />
                <img
                  src={FishTankPic2}
                  className="FishTankPic2"
                  alt="Fish Tank"
                />
                <img
                  src={FishTankPic3}
                  className="FishTankPic3"
                  alt="Fish Tank"
                />
                <p className="FishTankText2">
                  After our fish tank has been screening many submitted works to
                  the public for a month. So we gathered all of our participants
                  to come and exchange their expertise and practice amongst each
                  other. Cheng Night Screening Programme was an event for
                  intimate moving image practitioners to inhabit the fish tank
                  and its other inhabitants without a time limit, come throw
                  words and ideas into the tank.
                </p>
                <img
                  src={FishTankPic4}
                  className="FishTankPic4"
                  alt="Fish Tank"
                />
                <img
                  src={FishTankPic5}
                  className="FishTankPic5"
                  alt="Fish Tank"
                />
                <img
                  src={FishTankPic6}
                  className="FishTankPic6"
                  alt="Fish Tank"
                />
                <img
                  src={FishTankPic7}
                  className="FishTankPic7"
                  alt="Fish Tank"
                />
                <img
                  src={FishTankPic8}
                  className="FishTankPic8"
                  alt="Fish Tank"
                />
              </div>
              <div className="ZZTV"></div>
              <div className="LZingBoi"></div>
            </HorizontalScroll>
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Zing;
