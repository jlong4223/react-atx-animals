import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import "./NavBar.css";

const NavBar = (props) => {
  // this state is for the dropdown toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  // employee nav dropdown
  const [dropdownOpenEmp, setDropdownEmpOpen] = useState(false);
  const toggleEmp = () => setDropdownEmpOpen(!dropdownOpenEmp);

  // sticky header state
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
    <header className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
      <header id="innerHeader" className="sticky-inner">
        <Link className="navLink" to="/about">
          ABOUT US
        </Link>

        {/* reactstate drop down components */}
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
              <DropdownItem className="drop">
                <Link to="/pets">Pets</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem className="drop">
                <Link to="/prices">Prices</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
        <Link className="navLink" to="/contact">
          CONTACT US
        </Link>
        <a
          href="https://www.austinpetsalive.org/resources/adopter"
          target="_blank"
          rel="noreferrer"
          className="navLink"
        >
          RESOURCES
        </a>

        {/* Employee Drop down */}
        {props.user && props.user.admin === true ? (
          <Nav pills>
            <Dropdown nav isOpen={dropdownOpenEmp} toggle={toggleEmp}>
              <DropdownToggle nav caret className="navLink">
                EMPLOYEE
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className="drop">
                  <Link to="/addlisting">Add Listing</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem className="drop">
                  <Link to="/tasks">Open Tasks</Link>
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Nav>
        ) : (
          <></>
        )}
      </header>
    </header>
  );
};

export default NavBar;
