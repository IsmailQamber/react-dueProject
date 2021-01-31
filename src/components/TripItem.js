import { Link } from "react-router-dom";
import hikingTrips from "../hiking";
const TripItem = (props) => {
  return (
    <div>
      <Link to={`/trips/${props.hikingTrip.slug}`}>
        <h3>{props.hikingTrip.name}</h3>
      </Link>
      <h3>{props.hikingTrip.length}</h3>
    </div>
  );
};
export default TripItem;
