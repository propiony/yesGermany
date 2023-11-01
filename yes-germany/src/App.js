import logo from './logo.svg';
import Landing from "./pages/home";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "../src/styles/global.scss"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
         
        </a>
        <Landing/>
      </header>
    </div>
  );
}

export default App;
