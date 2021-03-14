import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = (props) => {
  return (
    <header id="navHeader">
      <Link className="navLink" to="">
        ABOUT US
      </Link>
      <Link className="navLink" to="/adopt">
        ADOPT A PET
      </Link>
      <Link className="navLink" to="">
        CONTACT US
      </Link>
      <Link className="navLink" to="">
        RESOURCES
      </Link>
    </header>
  );
};

export default NavBar;
