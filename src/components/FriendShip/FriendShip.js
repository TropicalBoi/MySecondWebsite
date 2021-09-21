import React from "react";
import FriendGif from "./FriendsGif.gif";
import FriendFont from "./FriendFont.png";
import "./FriendShip.css";
import { Link } from "react-router-dom";

const FriendShip = () => {
  return (
    <div className="FriendShip" id="Friendship">
      <img
        src={FriendFont}
        className="FriendFont"
        alt="Friendship end with Mudasir now Salman is my best friend."
      />
      <p className="Year5">(2018)</p>
      <p className="Text5">
        As a part of“Internet Universality Beyond Words” group exhibition by
        UNESCO
      </p>
      <Link to="/FriendshipEndedWithMudarsirNowSalmanIsMyBestFriend">
        <div className="myarrow5">
          <span class="line5"></span>
          <div className="triangle5">
            <span className="left5"></span>
            <span className="right5"></span>
          </div>
        </div>
      </Link>
      <img
        src={FriendGif}
        className="CoverImg5"
        alt="Friendship ended with Mudasir now Salman is my best friend."
      />
    </div>
  );
};

export default FriendShip;
