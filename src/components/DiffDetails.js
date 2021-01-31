import { useParams } from "react-router-dom";
import { Route, Switch } from "react-router";
import hikingTrips from "../hiking.js";
import { Details } from "./Styles";
const DiffDetail = () => {
  const hikeDiff = useParams().hikeDiff;
  const trip = hikingTrips.find(
    (hikingTrip) => hikingTrip.difficulty === +hikeDiff
  );
  return (
    <div>
      <div>
        <ul>
          <li>Trip name: {trip.name}</li>
          <li>City: {trip.city}</li>
          <li>Difficulty: {trip.difficulty}</li>
          <li>Trip length: {trip.length} Km</li>
          <li>Rating: {trip.rating}</li>
        </ul>
      </div>
    </div>
  );
};
export default DiffDetail;
