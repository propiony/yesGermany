import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "../src/styles/global.scss";
import Landing from "./pages/Landing";
import HeaderContent from "./components/HeaderContent";
function App() {
  return (
    <div className="App">
      <HeaderContent />
      <div>
        <Landing />
      </div>
    </div>
  );
}

export default App;
