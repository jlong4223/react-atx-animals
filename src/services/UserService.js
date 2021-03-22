import { setToken, getUserFromToken, removeToken } from "./TokenService";

// const BASE_URL = "http://localhost:3001/users/";
const BASE_URL = "https://atx-animals-api.herokuapp.com/users/";

function signup(user) {
  return fetch(BASE_URL + "signup", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(user),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      throw new Error("Email already taken!");
    })
    .then(({ token }) => setToken(token));
}

function login(credentials) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(credentials),
  })
    .then((res) => {
      if (res.ok) return res.json();
      // Probably a duplicate email
      else {
        alert("Bad Credentials");
        throw new Error("Bad credentials");
      }
    })
    .then(({ token }) => setToken(token));
}

function getUser() {
  return getUserFromToken();
}

function logout() {
  return removeToken();
}

export { signup, getUser, logout, login };
