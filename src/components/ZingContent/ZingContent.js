import React from "react";
import zingLogo from "./ZING_LOGO.png";
import gengar from "./Gengar.jpg";
import "./ZingContent.css";

class ZingContent extends React.Component {
  render() {
    return (
      <div className="ZingContent">
        <div className="Zing1">
          <div className="BackArrow">
            <span class="lineB"></span>
            <div className="triangleB">
              <span className="leftB"></span>
              <span className="rightB"></span>
            </div>
          </div>
          <img src={zingLogo} className="ZingVLogo" alt="Zing Video" />
          <img src={gengar} className="Gengar" alt="GENGAR!" />
          <p className="Header">ZING</p>
          <div className="TextZingC">
            <p className="TextBox">
              “ZING”, a term used by a sub-cultural group of Thai teenagers to
              define anything that exceeds or is an exaggeration of the norm,
              the default. Commonly used to refer to engines customized to go
              faster and harder.
            </p>
            <p className="TextBox">
              “ZING VIDEO” then is a video, a moving image, a film that is rad.
              Ones that exceeds the normal definition of a video.
            </p>
            <p className="TextBox">
              With this ethos, our team comes together with a spirit of
              resistance against all that is factory setting, of the default.
              Bringing together a community with a commitment to innovating
              moving images. ZING VIDEO is an exhibition platform for all those
              interested in the subject, no matter the practice. We welcome
              those from all fields, whether it be an animator, designer,
              vlogger, and etc.
            </p>
          </div>
        </div>
        <div className0="FishTank1">
          <p className="FishTankText1">
            Our first project, “Fish tank” originates from our interest in a
            contained ecosystem that serves as a decor like those in a
            restaurant. A glass cage for entertainment which exists in various
            public places, existing only to be observed. We have created an
            ecosystem of a fish tank and installed a screen within it. Situated
            on the second-floor dining area of a restaurant.
          </p>
        </div>
        <div className="FishTank2"></div>
        <div className="ZZTV1"></div>
        <div className="ZZTV2"></div>
        <div className="ZZTV3"></div>
        <div className="LZingBoi"></div>
      </div>
    );
  }
}

export default ZingContent;
