import React from 'react';
import Landing from '../Landing/Landing';
import Marquee from '../Marquee/Marquee';
import Zing from '../Zing/Zing';
import AsYou from '../AsYou/AsYou';
import IWill from '../IWill/IWill';
import AhShit from '../AhShit/AhShit';
import FriendShip from '../FriendShip/FriendShip';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ZingContent from '../ZingContent/ZingContent';

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/ZingContent">
            <ZingContent />
          </Route>


          <Route path="/">
            <div className="App">
              <Landing />
              <Marquee />
              <Zing />
              <AsYou />
              <IWill />
              <AhShit />
              <FriendShip />
            </div>
          </Route>

        </Switch>
      </Router>
    )
  };
}

export default App;