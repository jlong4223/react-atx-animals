import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function LoginPage(props) {
  return (
    <main className="page">
      <StyledDiv>
        <LoginForm {...props} />
      </StyledDiv>
    </main>
  );
}
