import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TripList from "./components/TripList.js";
import HikeDetail from "./components/HikeDetail";
import hikingTrips from "./hiking";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const home = hikingTrips.map((trip) => <Home key={trip.id} trip={trip} />);

  const [trip, setTrip] = useState(null);

  const setView = () => {
    trip ? <TripList setTrip={setTrip} /> : <HikeDetail setTrip={setTrip} />;
  };
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/trips/:hikeSlug">
          <HikeDetail />
        </Route>
        <Route path="/trips">
          <TripList />
        </Route>
        <Route path="/">{home}</Route>
      </Switch>
    </div>
  );
}

export default App;
