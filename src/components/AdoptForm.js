import { useState } from "react";
import { addTaskData } from "./../services/TaskService";

const AdoptForm = (props) => {
  const [formState, setFormState] = useState({
    animalType: "",
    animalName: "",
    personName: "",
    address: "",
    currentPets: undefined,
    anyChildren: undefined,
    typeOfResidence: "",
    contactInfo: "",
    status: "open",
    employee: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addTaskData(formState);
      alert("Thank you - Our team will be in touch soon!");
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(e) {
    setFormState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <legend>Adoption Form</legend>
          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <label>
              Which type of animal are you intersted in adopting?
              <select
                className="form-control"
                name="animalType"
                onChange={handleChange}
                value={formState.animalType}
              >
                <option value="" disabled defaultValue>
                  Type of animal
                </option>
                <option>Cat</option>
                <option>Dog</option>
              </select>
            </label>
            <label>
              What is the animals name?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="animalName"
                placeholder="Animal Name"
                value={formState.animalName}
              />
            </label>
            <label>
              What is your name?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="personName"
                placeholder="Your Name"
                value={formState.personName}
              />
            </label>
            <label>
              What is your address?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="address"
                placeholder="Your Address"
                value={formState.address}
              />
            </label>
            <label>
              Do you currently have any pets? If so, how many?
              <input
                className="form-control"
                type="number"
                min="0"
                onChange={handleChange}
                name="currentPets"
                value={formState.currentPets}
              />
            </label>
            <label>
              Do you have any children? If so, how many?
              <input
                className="form-control"
                type="number"
                min="0"
                onChange={handleChange}
                name="anyChildren"
                value={formState.anyChildren}
              />
            </label>
            <label>
              What type of residence do you live in?
              <select
                className="form-control"
                onChange={handleChange}
                value={formState.typeOfResidence}
                name="typeOfResidence"
              >
                <option value="" disabled defaultValue>
                  Type of Residence
                </option>
                <option>House</option>
                <option>Apartment</option>
                <option>Other</option>
              </select>
            </label>
            <label>
              What is your best contact info?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="contactInfo"
                placeholder="Phone or Email Info"
                value={formState.contactInfo}
              />
            </label>
            <button
              className="btn btn-sm btn-primary"
              //   disabled={!formValid()}
            >
              Submit Form
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AdoptForm;
