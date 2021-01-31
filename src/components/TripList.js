import hikingTrips from "../hiking.js";
import TripItem from "./TripItem";

const TripList = () => {
  const Trips = hikingTrips.map((hikingTrip) => {
    <TripItem key={hikingTrip.id} hikingTrip={hikingTrip} />;
  });
  return Trips;
};

export default TripList;
