import logo from '../../logo.svg';
import logoScale from '../../logoScale.svg';
import zing from './ZingHome.jpg';
import asyou from './AsYouGrowHome.jpg'
import iwill from './IWillHome.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="About">ABOUT</p>
        <div className="Logo">
          <img src={logoScale} className="Logo-scale" alt="logo" />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
      <div className="Marquee">
          <p> 
              TEWPARI BUALOI - TROPICALBOI - 
              TEWPARI BUALOI - TROPICALBOI -
              TEWPARI BUALOI - TROPICALBOI -
          </p>
      </div>
      <div className="App-body">
        <img src={zing} className="Zing" alt="zing" />
        <img src={asyou} className="AsYou" alt="as-you-grow-older-but-never-wiser" />
        <img src={iwill} className="IWill" alt="i-will-always-think-of-you-fondly" />
      </div>
    </div>
  );
}

export default App;
