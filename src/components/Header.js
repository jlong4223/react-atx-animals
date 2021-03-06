import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "./NavBar/NavBar";

const StyledHeader = styled.header`
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
  /* border: 1px solid green; */
  width: 100%;
  height: 140px;

  #logo {
    width: 230px;
    margin-top: -45px;
  }

  #links {
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    margin-top: 15px;
    /* border: 1px solid red; */
    height: 50px;
    padding-right: 30px;
  }

  #topIcons {
    display: flex;
    padding-right: 30px;
    justify-content: space-between;
    align-items: center;
    width: 350px;
    height: 50px;
    /* border: 1px solid red; */
  }
  @media screen and (max-width: 900px) {
    #links {
      flex-direction: row;
      align-items: flex-start;
      font-size: 13px;
    }
    #logo {
      width: 100px;
      margin: 0;
    }
    #topIcons {
      width: 300px;
    }
  }
`;

const Header = (props) => {
  let authLinks = props.user ? (
    <div id="links">
      <Link to="" onClick={props.logout}>
        LOGOUT
      </Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <span>WELCOME, {props.user.name}!</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
    </div>
  ) : (
    <div id="links">
      <Link to="/login">LOGIN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/register">REGISTER</Link>
      &nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  );

  return (
    <>
      <StyledHeader>
        <Link to="/">
          <img id="logo" src="https://i.imgur.com/uXgHNzN.png" alt="logo" />
        </Link>
        <div>
          <>{authLinks}</>
          <div id="topIcons">
            <a href="tel:567-259-7413">
              <h6>(567)-259-7413</h6>
            </a>
            <div>
              <a
                href="https://www.linkedin.com/in/jaredlong-95/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://github.com/jlong4223"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square fa-2x"></i>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://github.com/jlong4223"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-facebook-square fa-2x"></i>
              </a>
              &nbsp;&nbsp;
              <a
                href="https://github.com/jlong4223"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-instagram-square fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </StyledHeader>
      <NavBar {...props} />
    </>
  );
};

export default Header;
