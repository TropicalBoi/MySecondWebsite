import React from 'react';
import Landing from '../Landing/Landing';
import Marquee from '../Marquee/Marquee';
import zing from './ZingHome.jpg';
import asyou from './AsYouGrowHome.jpg'
import iwill from './IWillHome.jpg'
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Landing />
        <Marquee />
        <div className="App-body">
          <img src={zing} className="Zing" alt="zing" />
          <img src={asyou} className="AsYou" alt="as-you-grow-older-but-never-wiser" />
          <img src={iwill} className="IWill" alt="i-will-always-think-of-you-fondly" />
        </div>
      </div>
    )
  };
}

export default App;