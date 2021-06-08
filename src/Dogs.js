import { Route, Link } from "react-router-dom";
import Dog from "./Dog";

function Dogs() {
  return (
    <div className="dogs-container">
      <div className="dogs-menu">
        <h3>Dog Breeds</h3>
        <ul>
          <li>
            <Link to="/dogs/poodle">Poodle</Link>
          </li>
          <li>
            <Link to="/dogs/chihuahua">Chihuahua</Link>
          </li>
          <li>
            <Link to="/dogs/dachshund">Dachshund</Link>
          </li>
          <li>
            <Link to="/dogs/corgi">Corgi</Link>
          </li>
          <li>
            <Link to="/dogs/pomeranian">Pomeranian</Link>
          </li>
          <li>
            <Link to="/dogs/greyhound">Greyhound</Link>
          </li>
        </ul>
      </div>
      <div className="dog-image-list">
        <Route path="/dogs/:breed" component={Dog} />
      </div>
    </div>
  );
}

export default Dogs;
