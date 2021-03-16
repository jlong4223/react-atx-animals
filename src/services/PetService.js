const BASE_URL = "http://localhost:3001/";

export function fetchAnimalData() {
  return fetch(BASE_URL + "animals").then((res) => res.json());
}

export function addAnimalData(animal) {
  return fetch(BASE_URL + "animals", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(animal),
  }).then((res) => res.json());
}

export function deleteAnimal(animal) {
  return fetch(BASE_URL + `animals/${animal._id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
}

export function editAnimal(event, animal) {
  return fetch(BASE_URL + `animals/${animal._id}`, {
    body: JSON.stringify(animal),
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  });
}
