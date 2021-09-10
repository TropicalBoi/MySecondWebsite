import React from "react";
import FriendGif from "./FriendsGif.gif";
import FriendFont from "./FriendFont.png";
import "./FriendShip.css";

class FriendShip extends React.Component {
  render() {
    return (
      <div className="FriendShip">
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
        <div className="myarrow5">
          <span class="line5"></span>
          <div className="triangle5">
            <span className="left5"></span>
            <span className="right5"></span>
          </div>
        </div>
        <img
          src={FriendGif}
          className="CoverImg5"
          alt="Friendship ended with Mudasir now Salman is my best friend."
        />
      </div>
    );
  }
}

export default FriendShip;
