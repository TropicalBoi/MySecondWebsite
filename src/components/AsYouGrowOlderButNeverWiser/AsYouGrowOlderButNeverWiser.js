import React from "react";
import "./AsYouGrowOlderButNeverWiser.css";
import HorizontalScroll from "react-scroll-horizontal";

import { HashLink } from "react-router-hash-link";
import asYouImages from "./AsYouImages";

const AsYouGrowOlderButNeverWiser = () => {
  const overflowUnset = {
    overflow: `unset`,
    overflowX: `scroll`,
    overflowY: `hidden`,
    width: `100vw`,
  };

  return (
    <div className="AsYouContent">
      <HashLink to="/#AsYou">
        <div className="BackArrowAsYou">
          <div className="triangleBAsYou">
            <span className="leftBAsYou"></span>
            <span className="rightBAsYou"></span>
          </div>
          <span class="lineBAsYou"></span>
        </div>
      </HashLink>
      <HorizontalScroll
        reverseScroll={true}
        style={overflowUnset}
        className="AsYouHScroll"
      >
        <div className="AsYouContent1">
          <img
            src={asYouImages.AsYouPic1}
            className="AsYouPic1"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouFont1}
            className="AsYouFont1"
            alt="As you grow older but never wiser."
          />
          <div className="AsYouAbout">
            <p className="AsYouAboutBr">(</p>
            <p className="AsYouAboutText">
              Video single screen on a Gameboy Advance, 3.02 mins
            </p>
            <p className="AsYouAboutBr">)</p>
          </div>

          <div className="AsYouText1">
            <p className="AsYouTextBox1">
              Any excavation of history holds what which is unexpected. To come
              to the realization that what is labeled as history is not so far
              removed, not divorced from the present, and that it is within our
              lifetime. We have the chance to come into contact with it, to be a
              part of it, although we might not know of its existence. Yet, at
              every turn it is what constitutes our current predicament. This
              shock and the return of the past jolts me into reconsidering my
              history. It turns into a need to make a connection, to map the
              intricate networks that positions oneself in that history, to make
              sense of it.
            </p>
            <p className="AsYouTextBox2">
              This work utilizes a device which was relevant during the early
              2000's. I used a GameBoy Advance as a media player to play a video
              that I modified its extension so it can be viewed through a
              GameBoy. The video loops significant images from the same era
              connecting separate contexts of a media that normally projecting
              imaginary worlds of video games replaced with the reality of the
              time.
            </p>
          </div>
          <img
            src={asYouImages.AsYouPic1}
            className="AsYouPic1"
            alt="As you grow older but never wiser."
          />
          <p className="AsYouText2">
            " หลุย Louie!: Attitude Against Failure" is a group exhibition of
            young millennial artists based in Bangkok. Sharing the frustrations
            of pursuing a career in the arts in their mid-to-late twenties, each
            take on a common Thai Northeastern slang หลุย (Louie), which means a
            failed attempt, a botch, and a glitch. While the slang is usually
            said with attitude towards a mishap in their daily lives, being a
            familiar line amongst the peers of the generation, what is
            considered Louie has multitudes of meanings, particular to each
            situation yet is symptomatic of the circumstances that they inhabit
            as a whole.
          </p>
          <p className="AsYouText3">
            Putting together these multiplicities of Louie therefore takes on
            not only the micro-narratives embodied in each artist, but expands
            to bigger socio-political issues which structures those failures.
            This exhibition grasps at the unique youthful spirit and attitudes
            of these artists when responding to failure as a generation. It is
            light-hearted response yet spoken with conviction, หลุย !!!
          </p>
          <iframe
            src="https://player.vimeo.com/video/380427353?h=031a23bcdc&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="AsYouVid"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="As you grow older but never wiser., 2019."
          ></iframe>
          <img
            src={asYouImages.AsYouPic2}
            className="AsYouPic2"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouPic3}
            className="AsYouPic3"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouPic4}
            className="AsYouPic4"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouPic5}
            className="AsYouPic5"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouPic6}
            className="AsYouPic6"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouPic7}
            className="AsYouPic7"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouGif1}
            className="AsYouGif1"
            alt="As you grow older but never wiser."
          />
          <img
            src={asYouImages.AsYouGif2}
            className="AsYouGif2"
            alt="As you grow older but never wiser."
          />
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default AsYouGrowOlderButNeverWiser;
