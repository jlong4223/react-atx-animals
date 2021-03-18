const SHEETS_URL =
  "https://sheet.best/api/sheets/2c5cfdd0-92e1-42cb-89e7-79e7f1f5d577";

const BASE_URL = "http://localhost:3001/";

// Google Sheets fetch
export function fetchTaskData() {
  return fetch(SHEETS_URL).then((res) => res.json());
}

/* -------- Node/Mongo Task Form ---------- */
// TODO make a update/delete for each task status url
export function addTaskData(task) {
  return fetch(BASE_URL + "tasks", {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(task),
  }).then((res) => res.json());
}

export function fetchOpenTasks() {
  return fetch(BASE_URL + "tasks/open").then((res) => res.json());
}
export function fetchCompletedTasks() {
  return fetch(BASE_URL + "tasks/completed").then((res) => res.json());
}
export function fetchPendingTasks() {
  return fetch(BASE_URL + "tasks/pending").then((res) => res.json());
}