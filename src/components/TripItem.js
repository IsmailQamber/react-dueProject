import { Link } from "react-router-dom";
import hikingTrips from "../hiking";
const TripItem = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <Link to={`/trips/${props.hikingTrip.slug}`}>
          <h5 className="card-title">{props.hikingTrip.name}</h5>
        </Link>
        <h6 className="card-subtitle mb-2 text-muted">
          Trip length: {props.hikingTrip.length} Km
        </h6>
      </div>
    </div>
  );
};
export default TripItem;
