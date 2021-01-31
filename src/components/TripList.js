import hikingTrips from "../hiking";
import TripItem from "./TripItem";
import { useState } from "react";
import { Link } from "react-router-dom";

const TripList = (props) => {
  const [length, setLength] = useState();
  const [query, setQuery] = useState("");

  const Trips = hikingTrips
    .filter(
      (hikingTrip) =>
        hikingTrip.length <= +length &&
        hikingTrip.name.toLowerCase().includes(query.toLowerCase())
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
      {Trips}
      <label for="customRange2" class="form-label">
        Filter length
      </label>
      <input
        value={length}
        onChange={(event) => setLength(event.target.value)}
        type="range"
        class="form-range"
        min="1"
        max={hikingTrips.length}
        id="customRange2"
      />
      <input
        onChange={(event) => setQuery(event.target.value)}
        class="form-range"
        id="customRange2"
      />
    </div>
  );
};

export default TripList;
