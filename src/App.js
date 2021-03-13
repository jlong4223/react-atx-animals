import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser, logout } from "./services/UserService";

import "./App.css";

const App = (props) => {
  const [userState, setUserState] = useState({ user: getUser() });

  function handleRegisterOrLogin() {
    setUserState({ user: getUser() });
    props.history.push("/");
  }

  function handleLogout() {
    logout();
    setUserState({ user: null });
    props.history.push("/");
  }

  return (
    <div className="App">
      <h1>Hi there</h1>
    </div>
  );
};

export default App;
