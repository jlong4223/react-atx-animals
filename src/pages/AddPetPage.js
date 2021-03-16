import AddPetForm from "../components/AddPetForm/AddPetForm";

const AddPetPage = (props) => {
  return (
    <div className="page">
      <AddPetForm {...props} />
    </div>
  );
};

export default AddPetPage;
