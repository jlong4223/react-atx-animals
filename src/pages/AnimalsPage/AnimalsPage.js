import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  fetchAnimalData,
  deleteAnimal,
  editAnimal,
} from "../../services/PetService";
import Animals from "../../components/Animals/Animals";

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

  const styles = pageStyles();

  async function getData() {
    const data = await fetchAnimalData();
    setAnimalState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  //   TODO define handleUpdate here

  async function handleDelete(animal) {
    await deleteAnimal(animal)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async function updateAnimal(event, animal) {
    await editAnimal(event, animal)
      .then(() => {
        getData();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div style={styles.animalPage}>
      <h1 style={styles.h1}>Adopt A Pet</h1>
      <div className="container" style={styles.adoptPets}>
        <h3>
          Sometimes you don’t know true love until it licks you in the face 🐶  
        </h3>
        <h6>Thank you for considering adopting!</h6>
        <p>
          1. Fill out an{" "}
          <Link style={styles.adoptionLink} to="/adopt">
            Adoption Form
          </Link>
        </p>
        <p>
          2. One of our adoption specialists will contact you to go over your
          questionnaire, and if you are approved they will set up an adoption
          appointment
        </p>
        <p>3. If you have any questions please call 111.111.1111</p>
      </div>
      <div style={styles.animalsCard}>
        {animalState.map((animal, idx) => (
          <Animals
            {...props}
            animal={animal}
            key={idx}
            id={animal._id}
            delete={handleDelete}
            update={updateAnimal}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimalsPage;

function pageStyles() {
  return {
    animalPage: {
      backgroundColor: "#f5f5f5",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    h1: {
      margin: "30px 0",
    },
    animalsCard: {
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
    },
    adoptionLink: {
      borderBottom: "1px solid black",
    },
    adoptPets: {
      display: "flex",
      flexDirection: "column",
    },
  };
}
