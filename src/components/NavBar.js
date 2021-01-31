import { Link } from "react-router-dom";
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand">Navbar</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trips" className="nav-link">
                Trips
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link">Pricing</a>
            </li>
            <li className="nav-item dropdown"></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;
