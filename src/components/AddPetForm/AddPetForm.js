import { useState } from "react";
import { Link } from "react-router-dom";
import { addAnimalData } from "../../services/PetService";
import "./AddPetForm.css";

const AddPetForm = (props) => {
  const [animalState, setAnimalState] = useState({
    name: "",
    sex: "male",
    breed: "",
    age: undefined,
    size: "",
    weight: undefined,
    bio: "",
    picture: "",
  });

  function handleChange(e) {
    setAnimalState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addAnimalData(animalState);
      props.history.push("/pets");
    } catch (err) {
      console.log(err);
    }
  }

  function formValid() {
    return !!(
      animalState.age &&
      animalState.name &&
      animalState.sex &&
      animalState.size &&
      animalState.breed &&
      animalState.weight &&
      animalState.bio &&
      animalState.picture
    );
  }

  return (
    <div className="page">
      <div className="container">
        <div className="sidebar"></div>
        <form className="form-horizontal" onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend>Add a new pet listing</legend>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Pet Name"
                  name="name"
                  value={animalState.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <select
                  name="sex"
                  value={animalState.sex}
                  onChange={handleChange}
                >
                  <option defaultValue value="male">
                    Male
                  </option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Breed"
                  name="breed"
                  value={animalState.breed}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="number"
                  placeholder="Age"
                  name="age"
                  value={animalState.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="text"
                  placeholder="Size"
                  name="size"
                  value={animalState.size}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="number"
                  placeholder="Weight"
                  name="weight"
                  value={animalState.weight}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <textarea
                  type="text"
                  placeholder="Bio"
                  name="bio"
                  value={animalState.bio}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12">
                <input
                  type="file"
                  placeholder="Image URL"
                  name="picture"
                  value={animalState.picture}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-sm-12 text-center">
                <button
                  className="btn btn-sm btn-primary"
                  disabled={!formValid()}
                >
                  Add Listing
                </button>
                &nbsp;&nbsp;
                <Link to="/" className="btn btn-sm btn-secondary">
                  Cancel
                </Link>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default AddPetForm;
