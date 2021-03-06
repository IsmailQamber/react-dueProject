import { useParams } from "react-router-dom";
import { Route, Switch } from "react-router";
import hikingTrips from "../hiking.js";
import { Details } from "./Styles";
const HikeDetail = () => {
  const hikeSlug = useParams().hikeSlug;
  const trip = hikingTrips.find((hikingTrip) => hikingTrip.slug === hikeSlug);

  return (
    <div>
      <Details>
        <ul>
          <li>Trip name: {trip.name}</li>
          <li>City: {trip.city}</li>
          <li>Difficulty: {trip.difficulty}</li>
          <li>Trip length: {trip.length} Km</li>
          <li>Rating: {trip.rating}</li>
        </ul>
      </Details>
    </div>
  );
};
export default HikeDetail;
