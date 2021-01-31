import { Link } from "react-router-dom";
import hikingTrips from "../hiking";
import TripItem from "./TripItem";
import { Pic, Name, Text } from "./Styles";
const Home = (props) => {
  return (
    <div
      id="carouselExampleCaptions"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <Link to={`/trips/${props.trip.slug}`}>
            {" "}
            <Pic
              src={props.trip.image}
              class="d-block w-100"
              alt={props.trip.name}
            />
          </Link>
          <div class="carousel-caption d-none d-md-block">
            <Name>{props.trip.name}</Name>
            <Text>{props.trip.difficulty}</Text>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
