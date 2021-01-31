const TripItem = (props) => {
  return (
    <div>
      <h3>{props.hikingTrips.name}</h3>
      <h3>{props.hikingTrips.length}</h3>
    </div>
  );
};
export default TripItem;
