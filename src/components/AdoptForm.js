import { useState } from "react";
import { addTaskData } from "./../services/TaskService";
import styled from "styled-components";

const StyledLabel = styled.label`
  margin: 15px 0;
  width: 90vw;
  font-size: 18px;
`;

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
    <div style={{ marginTop: "30px" }}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Adoption Form</h1>
        <div className="form-group">
          <fieldset
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <StyledLabel>
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
            </StyledLabel>
            <StyledLabel>
              What is the animals name?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="animalName"
                placeholder="Animal Name"
                value={formState.animalName}
              />
            </StyledLabel>
            <StyledLabel>
              What is your name?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="personName"
                placeholder="Your Name"
                value={formState.personName}
              />
            </StyledLabel>
            <StyledLabel>
              What is your address?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="address"
                placeholder="Your Address"
                value={formState.address}
              />
            </StyledLabel>
            <StyledLabel>
              Do you currently have any pets? If so, how many?
              <input
                className="form-control"
                type="number"
                min="0"
                onChange={handleChange}
                name="currentPets"
                value={formState.currentPets}
              />
            </StyledLabel>
            <StyledLabel>
              Do you have any children? If so, how many?
              <input
                className="form-control"
                type="number"
                min="0"
                onChange={handleChange}
                name="anyChildren"
                value={formState.anyChildren}
              />
            </StyledLabel>
            <StyledLabel>
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
            </StyledLabel>
            <StyledLabel>
              What is your best contact info?
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="contactInfo"
                placeholder="Phone or Email Info"
                value={formState.contactInfo}
              />
            </StyledLabel>
            <button className="btn btn-sm btn-primary">Submit Form</button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default AdoptForm;
