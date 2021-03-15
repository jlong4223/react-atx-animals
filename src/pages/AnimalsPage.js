import { useState, useEffect } from "react";
import { fetchAnimalData } from "../services/PetService";
import Animals from "../components/Animals";

const AnimalsPage = (props) => {
  const [animalState, setAnimalState] = useState([
    {
      name: "",
      sex: "",
      breed: "",
      age: null,
      size: "",
      weight: null,
      bio: "",
      picture: "",
    },
  ]);

  async function getData() {
    const data = await fetchAnimalData();
    setAnimalState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  //   TODO define handleDelete and handleUpdate here

  return (
    <div>
      <h1>Animals Page</h1>
      {animalState.map((animal, idx) => (
        <Animals {...props} animal={animal} key={idx} />
      ))}
    </div>
  );
};

export default AnimalsPage;
