import React from 'react';
import logo from './logo.svg';
import logoScale from './logoScale.svg';
import logoScale2 from './logoScale2.svg';
import video from './WebtewLanding10mbNoSound.mp4';
import './Landing.css';
import { Player } from 'video-react';

class Landing extends React.Component {

  render() {
    return (
      <div className="Landing">
        <p className="About">ABOUT</p>
        <div className="Logo">
          <img src={logoScale} className="Logo-scale" alt="logo" />
          <img src={logoScale2} className="Logo-scale2" alt="logo" />
          <img src={logo} className="Tew-logo" alt="logo" />
          <Player className="Video"
            autoPlay={true}
            loop={true}
            muted={true}
            fluid={false}
            src={video}
            type="video/mp4"
          />
        </div>
      </div>
    )
  };
}

export default Landing;