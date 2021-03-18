import { useState, useEffect } from "react";

const EditTaskForm = (props) => {
  const [editState, setEditState] = useState({});

  useEffect(() => {
    if (props.task) {
      setEditState({
        employee: props.task.employee,
        status: props.task.status,
        contactInfo: props.task.contactInfo,
        typeOfResidence: props.task.typeOfResidence,
        anyChildren: props.task.anyChildren,
        currentPets: props.task.currentPets,
        address: props.task.address,
        personName: props.task.personName,
        animalName: props.task.animalName,
        animalType: props.task.animalType,
        _id: props.task._id,
      });
    }
  }, [props.task]);

  function handleChange(event) {
    setEditState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  async function handleUpdateTask(e, event) {
    // if (props.animal) editState._id = props.animal._id;
    e.preventDefault();
    try {
      await props.update(event, editState);
      props.toggleForm();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleUpdateTask}>
        <div className="form-group">
          <legend>Edit Task</legend>
          <fieldset style={{ display: "flex", flexDirection: "column" }}>
            <select
              className="form-control"
              name="animalType"
              onChange={handleChange}
              value={editState.animalType}
              id="animalType"
            >
              <option value="" disabled defaultValue>
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
              value={editState.animalName}
              id="animalName"
            />
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="personName"
              placeholder="Your Name"
              value={editState.personName}
              id="personName"
            />
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="address"
              placeholder="Your Address"
              value={editState.address}
              id="address"
            />
            <label>
              Pets:
              <input
                className="form-control"
                type="number"
                min="0"
                onChange={handleChange}
                name="currentPets"
                value={editState.currentPets}
                id="currentPets"
              />
            </label>
            <label>
              Children:
              <input
                className="form-control"
                type="number"
                min="0"
                onChange={handleChange}
                name="anyChildren"
                value={editState.anyChildren}
                id="anyChildren"
              />
            </label>
            <select
              className="form-control"
              onChange={handleChange}
              value={editState.typeOfResidence}
              name="typeOfResidence"
              id="typeOfResidence"
            >
              <option value="" disabled defaultValue>
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
              value={editState.contactInfo}
              id="contactInfo"
            />
            <input
              className="form-control"
              type="text"
              onChange={handleChange}
              name="employee"
              placeholder="Employee in charge"
              value={editState.employee}
              id="employee"
            />

            <select
              className="form-control"
              type="checkbox"
              onChange={handleChange}
              name="status"
              placeholder="Change Status"
              value={editState.status}
              id="status"
            >
              <option value="" disabled defaultValue>
                Status
              </option>
              <option>open</option>
              <option>pending</option>
              <option>completed</option>
            </select>

            <button className="btn btn-sm btn-primary">Submit Form</button>
          </fieldset>
        </div>
      </form>
    </>
  );
};

export default EditTaskForm;
