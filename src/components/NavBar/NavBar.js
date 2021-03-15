import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink,
} from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {
  // TODO look into sticky header issue
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <header
      id="navHeader"
      className={`sticky-wrapper${isSticky ? " sticky" : ""}`}
      ref={ref}
    >
      <Link className="navLink" to="">
        ABOUT US
      </Link>

      {/* reactstate drop down stuff */}
      <Nav pills>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret className="navLink">
            ADOPT A PET
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem className="drop">
              <Link to="/adopt">Adoption Form</Link>
            </DropdownItem>
            <DropdownItem divider />
            {props.user && props.user.admin === true ? (
              <DropdownItem className="drop">
                <Link to="/addpet">Action</Link>
              </DropdownItem>
            ) : (
              <DropdownItem className="drop" disabled>
                Action
              </DropdownItem>
            )}
            <DropdownItem divider />
            <DropdownItem className="drop">
              <Link to="/pets">Pets</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="drop">
              <Link to="/prices">Prices</Link>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="#"></NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink disabled href="#">
            Disabled Link
          </NavLink>
        </NavItem> */}
      </Nav>
      <Link className="navLink" to="/contact">
        CONTACT US
      </Link>
      <Link className="navLink" to="">
        RESOURCES
      </Link>
    </header>
  );
};

export default NavBar;
