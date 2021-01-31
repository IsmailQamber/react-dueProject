import hikingTrips from "../hiking";
import TripItem from "./TripItem";
import { useState } from "react";

const TripList = () => {
  const [length, setLength] = useState();

  console.log(length);
  const Trips = hikingTrips
    .map((hikingTrip) => (
      <TripItem key={hikingTrip.id} hikingTrip={hikingTrip} />
    ))
    .filter((hikingTrip) => hikingTrip.length === length);
  console.log(Trips.length);
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
        min="0"
        max="5"
        id="customRange2"
      />
    </div>
  );
};

export default TripList;
