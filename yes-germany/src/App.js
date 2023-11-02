import logo from "./logo.svg";
import Landing from "./pages/home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/global.scss";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="bg-light">
        <Header />
      </header>
      <div className="container">
        <Landing />
      </div>
    </div>  
  );
}

export default App;
