import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  /* align-items: flex-end; */
  justify-content: space-between;
  /* border: 1px solid green; */
  width: 100%;
  height: 180px;

  #logo {
    width: 250px;
    margin-top: -25px;
  }

  #links {
    align-items: flex-start;
    margin-top: 15px;
    margin-right: 30px;
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
      &nbsp;&nbsp;|&nbsp;&nbsp;
    </div>
  );

  return (
    <StyledHeader>
      <Link to="/">
        <img id="logo" src="https://i.imgur.com/uXgHNzN.png" alt="logo" />
      </Link>
      <>{authLinks}</>
    </StyledHeader>
  );
};

export default Header;
