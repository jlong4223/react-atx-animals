import EditAnimalForm from "./EditAnimals";
import "./Animals.css";

const Animals = (props) => {
  const animal = props.animal;
  return (
    <div>
      <div className="Card__base">
        <h1>{animal.name}</h1>
        <p>{animal.bio}</p>
        <p>{animal.weight}lbs</p>
        <img src={animal.picture} alt="pic" width="125" />
        <br />
        {/* onclick have a modal pop up with bio or all info outside of name, pic */}
        {props.user && props.user.admin === true ? (
          <div id="container">
            <button
              className="btn btn-danger"
              onClick={() => props.delete(animal)}
            >
              Delete
            </button>
            {/* <button onClick={toggleForm}>Edit</button> */}
          </div>
        ) : (
          <></>
        )}
      </div>
      <EditAnimalForm animal={props.animal} {...props} />
    </div>
  );
};

export default Animals;
