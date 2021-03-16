import { useState, useEffect } from "react";
import { fetchAnimalData } from "../../services/PetService";
import Animals from "../../components/Animals/Animals";
import "./AnimalsPage.css";

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
    <div id="animal-page">
      <h1>Adopt A Pet</h1>
      <h3>Sometimes you don’t know true love until it licks you in the face</h3>
      <h6>Thank you for considering adopting!</h6>
      <p>
        1. Fill out an adoption questionnaire 2. One of our adoption specialists
        will contact you to go over your questionnaire, and if you are approved
        they will set up an adoption appointment 3. If you have any questions
        please call 111.111.1111
      </p>
      <div id="animals-cards">
        {animalState.map((animal, idx) => (
          <Animals {...props} animal={animal} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;
