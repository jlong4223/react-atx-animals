import { useState } from "react";
import EditAnimalForm from "./EditAnimals";
import "./Animals.css";

const Animals = (props) => {
  const [editFormVisible, setEditFormVisible] = useState(false);

  function toggleForm() {
    setEditFormVisible(!editFormVisible);
  }

  const animal = props.animal;
  return (
    <div>
      {editFormVisible ? (
        <>
          <div className="Card__base">
            <EditAnimalForm animal={props.animal} {...props} />
            <div>
              <button className="btn btn-secondary" onClick={toggleForm}>
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="Card__base">
          <h1>{animal.name}</h1>
          <p>{animal.bio}</p>
          <p>{animal.weight}&nbsp;lbs</p>
          <img src={animal.picture} alt="pic" width="125" />
          <br />
          {/* onclick have a modal pop up with bio or all info outside of name, pic */}
          {props.user && props.user.admin === true ? (
            <div id="container" className="delete-edit">
              <button
                className="btn btn-danger"
                onClick={() => props.delete(animal)}
              >
                Delete
              </button>
              <button className="btn btn-info" onClick={toggleForm}>
                Edit
              </button>
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Animals;
