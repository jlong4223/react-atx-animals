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

        {/* TODO the below function is only for req.user.admin === true */}
        {/* <div id="container">
            <button onClick={() => props.deleteAnimal(animal)}>Delete</button>
            <button onClick={toggleForm}>Edit</button>
          </div> */}
      </div>
    </div>
  );
};

export default Animals;
