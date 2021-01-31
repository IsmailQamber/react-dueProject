import logo from "./logo.svg";
import "./App.css";
import TripList from "./components/TripList.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TripList />
      </header>
    </div>
  );
}

export default App;
