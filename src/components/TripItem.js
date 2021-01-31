const TripItem = (props) => {
  return (
    <div>
      <h3>{props.hikingTrip.name}</h3>
      <h3>{props.hikingTrip.length}</h3>
    </div>
  );
};
export default TripItem;
