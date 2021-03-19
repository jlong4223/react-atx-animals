import { useState } from "react";
import styled from "styled-components";
import RegisterForm from "../components/Register/RegisterForm";

const StyledP = styled.p`
  background-color: red;
  color: white;
  width: 200px;
  height: 30px;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
`;

const RegisterPage = (props) => {
  const [messageState, setMessageState] = useState({
    message: "",
  });

  function updateMessage(msg) {
    setMessageState({ message: msg });
  }

  return (
    <main className="page">
      <RegisterForm {...props} updateMessage={updateMessage} />
      {messageState.message === "" ? (
        <></>
      ) : (
        <StyledP>{messageState.message}</StyledP>
      )}
    </main>
  );
};

export default RegisterPage;
