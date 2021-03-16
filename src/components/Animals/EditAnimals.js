import { useState, useEffect } from "react";

const EditAnimalForm = (props) => {
  const [editState, setEditState] = useState({
    name: "",
    sex: "",
    breed: "",
    age: undefined,
    size: "",
    weight: undefined,
    bio: "",
    picture: "",
    _id: undefined,
  });

  useEffect(() => {
    if (props.animal) {
      setEditState({
        name: props.animal.name,
        sex: props.animal.sex,
        breed: props.animal.breed,
        age: props.animal.age,
        size: props.animal.size,
        weight: props.animal.weight,
        bio: props.animal.bio,
        picture: props.animal.picture,
        _id: props.animal._id,
      });
    }
  }, [props.animal]);

  function handleChange(event) {
    setEditState((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }

  async function handleUpdateAnimal(e, event) {
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
    <div>
      <form onSubmit={handleUpdateAnimal}>
        <h3>Edit the Following:</h3>
        <input
          onChange={handleChange}
          name="name"
          placeholder={editState.name}
          style={{ fontSize: 20 }}
          type="text"
          value={editState.name}
          id="name"
        />
        <input
          className="description-box"
          onChange={handleChange}
          name="sex"
          placeholder={editState.sex}
          type="text"
          style={{ margin: 5 }}
          value={editState.sex}
          id="description"
        />
        <input
          className="address-site"
          onChange={handleChange}
          name="breed"
          placeholder={editState.breed}
          type="text"
          style={{ margin: 5 }}
          value={editState.breed}
          id="address"
        />
        <input
          className="address-site"
          onChange={handleChange}
          name="age"
          placeholder={editState.age}
          type="number"
          style={{ margin: 5 }}
          value={editState.age}
          id="age"
        />
        <input
          onChange={handleChange}
          name="size"
          placeholder={editState.size}
          type="text"
          style={{ margin: 5 }}
          value={editState.size}
          id="size"
        />
        <input
          onChange={handleChange}
          name="weight"
          placeholder={editState.weight}
          type="number"
          style={{ margin: 5 }}
          value={editState.weight}
          id="weight"
        />
        <textarea
          className="address-site"
          onChange={handleChange}
          name="bio"
          placeholder={editState.bio}
          type="text"
          style={{ margin: 5 }}
          value={editState.bio}
          id="bio"
        />
        <input
          onChange={handleChange}
          name="picture"
          placeholder={editState.picture}
          type="text"
          style={{ margin: 5 }}
          value={editState.picture}
          id="picture"
        />
        <div style={{ margin: 5 }}>
          <input
            type="submit"
            className="btn btn-primary cancel-update"
            value={props.animal ? "Update" : "Nothing to Update"}
          />
        </div>
      </form>
    </div>
  );
};

export default EditAnimalForm;
