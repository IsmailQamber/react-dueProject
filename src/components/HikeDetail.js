import hikingTrips from "../hiking.js";
const HikeDetail = () => {
  return (
    <div>
      <h3>{hikingTrips.name}</h3>
      <h3>{hikingTrips.city}</h3>
      <h3>{hikingTrips.difficulty}</h3>
      <h3>{hikingTrips.length}</h3>
      <h3>{hikingTrips.rating}</h3>
    </div>
  );
};
export default HikeDetail;
