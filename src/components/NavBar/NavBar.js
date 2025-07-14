import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => (
  <ul className="navbar">
    <li>
      <Link to="/">
        <button>Shop</button>
      </Link>
    </li>
    <li>
      <Link to="/About">
        <button>About</button>
      </Link>
    </li>
    <li>
      <Link to="/Blog">
        <button>Blog</button>
      </Link>
    </li>
    <li>
      <Link to="/Contact">
        <button>Contact</button>
      </Link>
    </li>
  </ul>
);

export default NavBar;
