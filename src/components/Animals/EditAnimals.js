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

  function handleUpdateAnimal(event) {
    // if (props.animal) editState._id = props.animal._id;
    props.update(event, editState);
  }

  return (
    <div>
      <form onSubmit={handleUpdateAnimal}>
        <legend>Edit the Following:</legend>
        <input
          onChange={handleChange}
          name="name"
          placeholder={editState.name}
          type="text"
          value={editState.name}
          id="name"
        />
        <textarea
          className="description-box"
          onChange={handleChange}
          name="sex"
          placeholder={editState.sex}
          type="text"
          value={editState.sex}
          id="description"
        />
        <textarea
          className="address-site"
          onChange={handleChange}
          name="breed"
          placeholder={editState.breed}
          type="text"
          value={editState.breed}
          id="address"
        />
        <textarea
          className="address-site"
          onChange={handleChange}
          name="age"
          placeholder={editState.age}
          type="text"
          value={editState.age}
          id="age"
        />
        <input
          onChange={handleChange}
          name="size"
          placeholder={editState.size}
          type="text"
          value={editState.size}
          id="size"
        />
        <input
          onChange={handleChange}
          name="weight"
          placeholder={editState.weight}
          type="number"
          value={editState.weight}
          id="weight"
        />
        <textarea
          className="address-site"
          onChange={handleChange}
          name="bio"
          placeholder={editState.bio}
          type="text"
          value={editState.bio}
          id="bio"
        />
        <input
          onChange={handleChange}
          name="picture"
          placeholder={editState.picture}
          type="text"
          value={editState.picture}
          id="picture"
        />
        <input
          onChange={handleChange}
          name="_id"
          placeholder={editState._id}
          type="text"
          value={editState._id}
          id="_id"
        />
        <input
          type="submit"
          className="update-btn"
          value={props.animal ? "Update Animal" : "Nothing to Update"}
        />
      </form>
    </div>
  );
};

export default EditAnimalForm;
