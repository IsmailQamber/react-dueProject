import hikingTrips from "../hiking";
import TripItem from "./TripItem";
import Search from "./Search";
import { useState } from "react";
import { Link } from "react-router-dom";

const TripList = (props) => {
  const [length, setLength] = useState(0);
  const [query, setQuery] = useState("");
  const [diff, setDiff] = useState("");
  console.log(diff);
  const Trips = hikingTrips
    .filter((hikingTrip) => hikingTrip.length <= +length)
    .filter((hikingTrip) =>
      hikingTrip.name.toLowerCase().includes(query.toLowerCase())
    )
    .filter(
      (hikingTrip) =>
        hikingTrip.difficulty.toLocaleLowerCase() === diff.toLocaleLowerCase()
    )

    .map((hikingTrip) => (
      <TripItem
        key={hikingTrip.id}
        hikingTrip={hikingTrip}
        setTrip={props.setTrip}
      />
    ));

  return (
    <div>
      <Link to={`/trips/${hikingTrips.difficulty}`}>Easy</Link>
      <select
        onChange={(event) => setDiff(event.target.value)}
        class="form-select"
        aria-label="Default select example"
      >
        <option selected>Open this select menu</option>
        <option value="Easy"></option>

        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <Search
        setLength={setLength}
        hikingTrips={hikingTrips}
        length={length}
        setQuery={setQuery}
      />
      {Trips}
    </div>
  );
};

export default TripList;
