import logo from '../../logo.svg';
import logoScale from '../../logoScale.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logoScale} className="Logo-scale" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
