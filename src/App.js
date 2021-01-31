import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import TripList from "./components/TripList.js";
import HikeDetail from "./components/HikeDetail";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const [trip, setTrip] = useState(null);

  const setView = () => {
    trip ? <TripList setTrip={setTrip} /> : <HikeDetail setTrip={setTrip} />;
  };
  return (
    <div className="App">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1"
        crossorigin="anonymous"
      ></link>
      <header className="App-header">
        <Link to="/trips">Trips</Link>
        <Switch>
          <Route path="/trips/:hikeSlug">
            <HikeDetail />
          </Route>
          <Route path="/trips">
            <TripList />
          </Route>
        </Switch>
      </header>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW"
        crossorigin="anonymous"
      ></script>
    </div>
  );
}

export default App;
