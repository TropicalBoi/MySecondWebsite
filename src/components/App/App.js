import React from 'react';
import Landing from '../Landing/Landing';
import Marquee from '../Marquee/Marquee';
import Zing from '../Zing/Zing';
import AsYou from '../AsYou/AsYou';
import IWill from '../IWill/IWill';
import AhShit from '../AhShit/AhShit';
import FriendShip from '../FriendShip/FriendShip';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Landing />
        <Marquee />
        <Zing />
        <AsYou />
        <IWill />
        <AhShit />
        <FriendShip />
      </div>
    )
  };
}

export default App;