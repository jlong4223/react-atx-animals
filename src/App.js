import { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { getUser, logout } from "./services/UserService";

// pages and components
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Header from "./components/Header";
import NotFound from "./components/NotFound";

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
      <Header logout={handleLogout} user={userState.user} />
      <Switch>
        <Route exact path="/" render={() => <HomePage {...props} />} />
        <Route
          exact
          path="/login"
          render={() => <LoginPage login={handleRegisterOrLogin} {...props} />}
        />
        <Route
          exact
          path="/register"
          render={() => (
            <RegisterPage register={handleRegisterOrLogin} {...props} />
          )}
        />
        <Route component={NotFound} />
      </Switch>
      <footer>Footer</footer>
    </div>
  );
};

export default App;
