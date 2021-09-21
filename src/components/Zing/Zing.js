import React from "react";
import "./Zing.css";
import HorizontalScroll from "react-scroll-horizontal";
import { HashLink } from "react-router-hash-link";
import { Player } from "video-react";
import zingImages from "./ZingImages";

const Zing = () => {
  return (
    <div className="ZingContent">
      <HashLink to="/#Zing">
        <div className="BackArrowZing">
          <div className="triangleBZing">
            <span className="leftBZing"></span>
            <span className="rightBZing"></span>
          </div>
          <span class="lineBZing"></span>
        </div>
      </HashLink>
      <HorizontalScroll>
        <div className="Zing1">
          <img
            src={zingImages.zingLogo}
            className="ZingVLogo"
            alt="Zing Video"
          />
          <img src={zingImages.gengar} className="Gengar" alt="GENGAR!" />
          <p className="ZingFont">ZING</p>
          <div className="TextZingC">
            <p className="TextBox">
              “ZING”, a term used by a sub-cultural group of Thai teenagers to
              define anything that exceeds or is an exaggeration of the norm,
              the default. Commonly used to refer to engines customized to go
              faster and harder.
            </p>
            <p className="TextBox">
              “ZING VIDEO” then is a video, a moving image, a film that is rad.
              Ones that exceed the normal definition of a video.
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
        <div className="FishTank">
          <img src={zingImages.TankTube} className="TankTube" alt="Fish Tank" />
          <img src={zingImages.FishGang} className="FishGang" alt="Fish Tank" />
          <img src={zingImages.BigTank} className="BigTank" alt="Fish Tank" />
          <img src={zingImages.guppy1} className="guppy1-1" alt="Fish Tank" />
          <img src={zingImages.guppy8} className="guppy2-8" alt="Fish Tank" />
          <img src={zingImages.guppy7} className="guppy3-7" alt="Fish Tank" />
          <img src={zingImages.guppy2} className="guppy4-2" alt="Fish Tank" />
          <img src={zingImages.guppy4} className="guppy5-4" alt="Fish Tank" />
          <img src={zingImages.guppy3} className="guppy6-3" alt="Fish Tank" />
          <img src={zingImages.guppy5} className="guppy7-5" alt="Fish Tank" />
          <img src={zingImages.guppy6} className="guppy8-6" alt="Fish Tank" />
          <img src={zingImages.guppy4} className="guppy9-4" alt="Fish Tank" />
          <img src={zingImages.guppy3} className="guppy10-3" alt="Fish Tank" />
          <img src={zingImages.guppy8} className="guppy11-8" alt="Fish Tank" />
          <img src={zingImages.guppy1} className="guppy12-1" alt="Fish Tank" />
          <img src={zingImages.guppy7} className="guppy13-7" alt="Fish Tank" />
          <img src={zingImages.weed1} className="weed1" alt="Fish Tank" />
          <img src={zingImages.weed2} className="weed2" alt="Fish Tank" />
          <img src={zingImages.TV} className="TV" alt="Fish Tank" />
          <img src={zingImages.bubble} className="bubble" alt="Fish Tank" />
          <img
            src={zingImages.FishTankOpencall}
            className="FishTankOpencall"
            alt="Fish Tank Open call"
          />
          <img
            src={zingImages.FishTankFont}
            className="FishTankFont"
            alt="Fish Tank"
          />
          <p className="FishTankText1">
            Our first project, “Fish tank” originates from our interest in a
            contained ecosystem that serves as a decor like those in a
            restaurant. A glass cage for entertainment which exists in various
            public places, existing only to be observed. We have created an
            ecosystem of a fish tank and installed a screen within it. Situated
            on the second-floor dining area of a restaurant.
          </p>
          <img
            src={zingImages.FishTankPic1}
            className="FishTankPic1"
            alt="Fish Tank"
          />
          <img
            src={zingImages.FishTankPic2}
            className="FishTankPic2"
            alt="Fish Tank"
          />
          <img
            src={zingImages.FishTankPic3}
            className="FishTankPic3"
            alt="Fish Tank"
          />
          <p className="FishTankText2">
            After our fish tank has been screening many submitted works to the
            public for a month. So we gathered all of our participants to come
            and exchange their expertise and practice amongst each other. Cheng
            Night Screening Programme was an event for intimate moving image
            practitioners to inhabit the fish tank and its other inhabitants
            without a time limit, come throw words and ideas into the tank.
          </p>
          <img
            src={zingImages.FishTankPic4}
            className="FishTankPic4"
            alt="Fish Tank"
          />
          <img
            src={zingImages.FishTankPic5}
            className="FishTankPic5"
            alt="Fish Tank"
          />
          <img
            src={zingImages.FishTankPic6}
            className="FishTankPic6"
            alt="Fish Tank"
          />
          <img
            src={zingImages.FishTankPic7}
            className="FishTankPic7"
            alt="Fish Tank"
          />
          <img
            src={zingImages.FishTankPic8}
            className="FishTankPic8"
            alt="Fish Tank"
          />
          <p className="FishTankEnd">FISH TANK</p>
        </div>
        <div className="ZZTV">
          <div className="fire"></div>
          <img src={zingImages.ZZTVFont} className="ZZTVFont" alt="ZZTV" />
          <img
            src={zingImages.evaCongrats}
            className="evaCongrats"
            alt="ZZTV"
          />
          <img src={zingImages.cctv} className="cctv" alt="ZZTV" />
          <p className="ZZTVtext1">
            During 2020, a pandemic and rising of Thai people who can't endure
            the Freud democracy of military governance. Masses of Thai youths
            and pro-democracy march and protest the government due to the
            failure of economic, inequality, transparency, pandemic management
            and all other continuing innumerable corrupt deeds.
          </p>
          <p className="ZZTVtext2">
            In the 12nd of September 2020 was the day of the event “Act สิ Art
            by FreeArts” people gathered in front of the Bangkok Art and
            Cultural Center to raise their voices through live music, political
            statements, poem reading, and performance.
          </p>
          <img src={zingImages.ZZTVpic1} className="ZZTVpic1" alt="ZZTV" />
          <img src={zingImages.ZZTVpic2} className="ZZTVpic2" alt="ZZTV" />
          <p className="ZZTVtext3">
            ZING VIDEO in collaboration with Pasuth Sa-ingthong volunteered as
            surveillance cameras for the event by streaming live videos through
            our Facebook page in an attempt to report, ensure safety and record
            one of the significant moments of our time. Along with live
            streaming, we did jam images into the video to expand the atmosphere
            of the event and to express our opinion toward it.
          </p>
          <img src={zingImages.gopro} className="Gopro" alt="ZZTV" />
          <img src={zingImages.iphone} className="Iphone" alt="ZZTV" />
          <img src={zingImages.laptop} className="Laptop" alt="ZZTV" />
          <p className="S1">1</p>
          <p className="S2">2</p>
          <p className="S3">3</p>
          <p className="S4">4</p>
          <img src={zingImages.steps} className="Steps" alt="ZZTV" />
          <iframe
            src="https://player.vimeo.com/video/602404722?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;h=2772d231be"
            className="ZZZTVR31"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="ZZTV Round 3(+1), 2020."
          ></iframe>
          <p className="thistestrun"> (this is a record of our test run.)</p>
          <Player
            className="ZZTVtestrun"
            fluid={false}
            width="12%"
            height="40%"
            src={zingImages.zingTestRun}
            aspectRatio={"16:9"}
            type="video/mp4"
          />
          <img src={zingImages.smith} className="Zmith" alt="ZZTV" />
          <img src={zingImages.ZZTVpic3} className="ZZTVpic3" alt="ZZTV" />
          <img src={zingImages.ZZTV31} className="ZZTVROUND" alt="ZZTV" />
          <p className="ZZTVEnd">ZZTV</p>
        </div>
        <div className="LZingBoi">
          <div className="LZCard">
            <img
              src={zingImages.cardNoise}
              className="LZcardNoise"
              alt="LZINGBOI"
            />
            <img src={zingImages.LZtext} className="LZtext" alt="LZINGBOI" />
            <img
              src={zingImages.LZcolor1}
              className="LZcolor1"
              alt="LZINGBOI"
            />
            <img
              src={zingImages.LZcolor2}
              className="LZcolor2"
              alt="LZINGBOI"
            />
          </div>
          <img src={zingImages.LZSPIN} className="LZspin" alt="LZINGBOI" />
          <div className="LZcontact">
            <p className="Contact">For more information please contact</p>
            <p className="Zingmail">zingvdo@gmail.com</p>
          </div>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default Zing;
