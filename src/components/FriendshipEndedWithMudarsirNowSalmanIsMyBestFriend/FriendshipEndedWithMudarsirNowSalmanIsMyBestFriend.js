import React from "react";
import "./FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend.css";
import HorizontalScroll from "react-scroll-horizontal";

import { HashLink } from "react-router-hash-link";
import FriendshipImages from "./FriendshipImages";

const FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend = () => {
  const overflowUnset = {
    overflow: `unset`,
    overflowX: `scroll`,
    overflowY: `hidden`,
    width: `100vw`,
  };

  return (
    <div className="FriendshipContent">
      <HashLink to="/#Friendship">
        <div className="BackArrowFriendship">
          <div className="triangleBFriendship">
            <span className="leftBFriendship"></span>
            <span className="rightBFriendship"></span>
          </div>
          <span class="lineBFriendship"></span>
        </div>
      </HashLink>
      <HorizontalScroll
        reverseScroll={true}
        style={overflowUnset}
        className="FriendHScroll"
      >
        <div className="FriendshipContent1">
          <img
            src={FriendshipImages.friendshipFont}
            className="friendshipFont"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <div className="friendshipText1">
            <div className="friendshipTextbox">
              When you can’t criticize your government or any institutions
              publicly so internet memes become a subversive tool for
              communication, and black comedy.
            </div>
            <div className="friendshipTextbox">
              On the Internet, memes form a popular subculture that continuously
              evolves globally without limitations or boundaries. They happen as
              digital images are copied and re-used with alterations rapidly
              spreading through online networks and social media platforms.
              Relying on symbols and metaphors, they function as an
              often-humorous coded language that cannot be understood in a
              literal sense. This video is a commentary about free speech and
              uses memes as a code to convey historic information that may
              otherwise be prohibited in Thailand. The narrative requires a
              'decoding' process in order to fully make sense, however it can
              also be viewed as a visual piece that stimulates curiosity,
              provoking the viewer to find out more about the symbols that are
              used within it.
            </div>
          </div>
          <img
            src={FriendshipImages.friendshipPic1}
            className="friendshipPic1"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <img
            src={FriendshipImages.friendshipPic2}
            className="friendshipPic2"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <div className="friendshipText2">
            Video single screen on a Smartphone, 4.45 mins
          </div>
          <iframe
            src="https://player.vimeo.com/video/380416595?h=a1080a4bc9&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
            className="friendshipVid"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            title="Friendship ended with mudasir now salman is my best friend., 2018."
          ></iframe>
          <img
            src={FriendshipImages.friendshipPic3}
            className="friendshipPic3"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <img
            src={FriendshipImages.friendshipPic4}
            className="friendshipPic4"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <div className="friendshipText3">
            The exhibition presented the works of 11 artists and creators who
            took part in the UNESCO workshop on Internet Universality in May
            2018. It highlights their unique perspectives on issues surrounding
            the Internet ecosystem in Southeast Asia.
          </div>
          <img
            src={FriendshipImages.friendshipPic5}
            className="friendshipPic5"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <img
            src={FriendshipImages.friendshipPic6}
            className="friendshipPic6"
            alt="Friendship ended with Mudasir now Salman is my best friend."
          />
          <div className="friendshipText4">
            My first attempt was to exhibit it as a smartphone that is left
            charging on the floor by someone but due to the exhibition space
            restriction and regulations, it never happened.
          </div>
        </div>
      </HorizontalScroll>
    </div>
  );
};

export default FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend;
