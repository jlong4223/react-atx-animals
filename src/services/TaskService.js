import { getToken } from "./TokenService";
const SHEETS_URL =
  "https://sheet.best/api/sheets/2c5cfdd0-92e1-42cb-89e7-79e7f1f5d577";

// const BASE_URL = "http://localhost:3001/";
const BASE_URL = "https://atx-animals-api.herokuapp.com/";

// Google Sheets fetch
export function fetchTaskData() {
  return fetch(SHEETS_URL).then((res) => res.json());
}

/* -------- Node/Mongo Task Form ---------- */
export function addTaskData(task) {
  return fetch(BASE_URL + "tasks", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(task),
  }).then((res) => res.json());
}

export function deleteTask(task) {
  return fetch(BASE_URL + `tasks/${task._id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      // added authorization header to send the token with the req
      Authorization: "Bearer " + getToken(),
    },
  });
}

export function editTask(event, task) {
  return fetch(BASE_URL + `tasks/${task._id}`, {
    body: JSON.stringify(task),
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      // added authorization header to send the token with the req
      Authorization: "Bearer " + getToken(),
    },
  });
}

export function fetchOpenTasks() {
  return fetch(BASE_URL + "tasks/open", {
    headers: { Authorization: "Bearer " + getToken() },
  }).then((res) => res.json());
}
export function fetchCompletedTasks() {
  return fetch(BASE_URL + "tasks/completed", {
    headers: { Authorization: "Bearer " + getToken() },
  }).then((res) => res.json());
}
export function fetchPendingTasks() {
  return fetch(BASE_URL + "tasks/pending", {
    headers: { Authorization: "Bearer " + getToken() },
  }).then((res) => res.json());
}
