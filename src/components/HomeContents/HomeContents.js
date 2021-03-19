import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  height: 80vh;
  width: 100%;

  a {
    width: 27%;
  }

  div {
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.4);
  }
  div:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.9);
    transform: scale(1.1, 1.1);
  }
`;

const HomeContents = (props) => {
  return (
    <StyledMain className="page">
      <Link to="/pets" id="link">
        <div>
          <h2>Adopt A Pet</h2>
          <i className="fas fa-paw fa-3x"></i>
        </div>
      </Link>
      <Link>
        <div>
          <h2>Donate </h2>
          <i className="fas fa-money-bill-wave fa-3x"></i>
        </div>
      </Link>
      <Link>
        <div>
          <h2>Get Involved</h2>
          <i className="fas fa-hands-helping fa-3x"></i>
        </div>
      </Link>
    </StyledMain>
  );
};

export default HomeContents;
