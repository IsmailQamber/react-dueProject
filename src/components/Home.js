import { Link } from "react-router-dom";
import hikingTrips from "../hiking";
import TripItem from "./TripItem";
const Home = (props) => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src={props.trip.image}
            class="d-block w-100"
            alt={props.trip.name}
            height="50%"
          />
          <div class="carousel-caption d-none d-md-block">
            <h5>{props.trip.name}</h5>
            <p>{props.trip.difficulty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
