import { useParams } from "react-router-dom";
import hikingTrips from "../hiking.js";
const HikeDetail = () => {
  const hikeSlug = useParams().hikeSlug;
  const trip = hikingTrips.find((trip) => trip.slug === hikeSlug);
  return (
    <div style={{ alignItems: "left" }}>
      <h3>Trip name: {trip.name}</h3>
      <h3>City: {trip.city}</h3>
      <h3>Difficulty: {trip.difficulty}</h3>
      <h3>Trip length: {trip.length} Km</h3>
      <h3>Rating: {trip.rating}</h3>
    </div>
  );
};
export default HikeDetail;
