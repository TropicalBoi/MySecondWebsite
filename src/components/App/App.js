import React from 'react';
import Landing from '../Landing/Landing';
import Marquee from '../Marquee/Marquee';
import Zing from '../Zing/Zing';
import AsYou from '../AsYou/AsYou';
import IWill from '../IWill/IWill';
import './App.css';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <Landing />
        <Marquee />
        <div className="App-body">
          <Zing />
          <AsYou />
          <IWill />
        </div>
      </div>
    )
  };
}

export default App;