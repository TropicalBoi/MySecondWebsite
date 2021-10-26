import React from "react";
import "./AhShitHereWeGoAgain.css";
import { HashLink } from "react-router-hash-link";
import AhShitImages from "./AhShitImages";

const AhShitHereWeGoAgain = () => {
  return (
    <div className="AhShitContent">
      <HashLink to="/#AhShit">
        <div className="BackArrowAhShit">
          <div className="triangleBAhShit">
            <span className="leftBAhShit"></span>
            <span className="rightBAhShit"></span>
          </div>
          <span class="lineBAhShit"></span>
        </div>
      </HashLink>
      <div className="AhShitContent1">
        <img
          src={AhShitImages.AhShitFont}
          className="AhShitFont"
          alt="Ah shit, here we go again."
        />
        <div className="AhShitPooh"></div>
        <p className="AhShitText1">
          This piece is a response to a previous piece
          <HashLink
            to="/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend"
            className="TextLink"
          >
            (Friendship ended with Mudasir now Salman is my best friend., 2018.)
          </HashLink>
          I submitted for a show. The initial piece was rejected because it was
          deemed too political by the institution. Consequently, the title of
          this piece is a reference to a meme where the main character of a
          video game is faced with the same obstacle again and declares ‘Ah
          shit, here we go again’. Many artists here in Thailand have similarly
          been censored for their political artwork and face the obstacle of an
          authoritarian state. Other pop culture references are employed to rely
          on coded language to express this absurd cycle.
        </p>
        <p className="AhShitText2">( Video single screen, 4.01 mins )</p>
        <img
          src={AhShitImages.AhShitPic1}
          className="AhShitPic1"
          alt="Ah shit, here we go again."
        />
        <img
          src={AhShitImages.AhShitPic2}
          className="AhShitPic2"
          alt="Ah shit, here we go again."
        />
        <p className="AhShitText3">
          The video exhibition entitled “Pioneer in Video Art from Thailand,
          Slovenia, Norway Since 1980" compares and contrasts art styles
          prevalent in South East Asia, Europe and Scandinavia using material
          produced by artists from Thailand, Slovenia and Norway. The works
          represent examples of single screen video and video installations.
        </p>
        <iframe
          src="https://player.vimeo.com/video/385936695?h=b8f90a8a55&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
          className="AhShitVid"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
          title="Ah shit, Here we go again., 2019"
        ></iframe>
      </div>
    </div>
  );
};

export default AhShitHereWeGoAgain;
