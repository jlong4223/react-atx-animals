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
    status: "",
    employee: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await addTaskData(formState);
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
      {/* ----- Google Form attached to sheets: ------ */}
      {/* <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLScDk-mwZQaYrJJqs3Oysw-TrOlf-cPTXt8BZVnuwjnD336EeQ/viewform?embedded=true"
        width="800"
        height="550"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe> */}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <legend>Adoption Form</legend>
          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <select
              className="form-control"
              name="animalType"
              onChange={handleChange}
              value={formState.animalType}
            >
              <option value="" disabled selected>
                Type of animal
              </option>
              <option>Cat</option>
              <option>Dog</option>
            </select>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="animalName"
              placeholder="Animal Name"
              value={formState.animalName}
            />
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="personName"
              placeholder="Your Name"
              value={formState.personName}
            />
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="address"
              placeholder="Your Address"
              value={formState.address}
            />
            <input
              className="form-control"
              type="number"
              min="0"
              onChange={handleChange}
              name="currentPets"
              value={formState.currentPets}
            />
            <input
              className="form-control"
              type="number"
              min="0"
              onChange={handleChange}
              name="anyChildren"
              value={formState.anyChildren}
            />
            <select
              className="form-control"
              onChange={handleChange}
              value={formState.typeOfResidence}
              name="typeOfResidence"
            >
              <option value="" disabled selected>
                Type of Residence
              </option>
              <option>House</option>
              <option>Apartment</option>
              <option>Other</option>
            </select>
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="contactInfo"
              placeholder="Phone or Email Info"
              value={formState.contactInfo}
            />
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
