// const BASE_URL = "http://localhost:3001/send";
const BASE_URL = "https://atx-animals-api.herokuapp.com/send";

export function sendMail(email) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(email),
  });
}
