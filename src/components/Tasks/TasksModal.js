import { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "320px",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const TasksModal = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function changeModal() {
    setIsOpen(!modalIsOpen);
  }

  return (
    <div>
      <button
        style={{ width: "100%" }}
        className="btn btn-info"
        onClick={changeModal}
      >
        View Details
      </button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={changeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h5>Name: {props.task.personName}</h5>
        <h5>Pet of Interest: {props.task.animalName}</h5>
        <h5>Pet Type: {props.task.animalType}</h5>
        <h5>Number of Childen: {props.task.anyChildren}</h5>
        <h5>Current number of Pets: {props.task.currentPets} </h5>
        <h5>Contact Info: {props.task.contactInfo}</h5>
        <h5>Residence Type: {props.task.typeOfResidence}</h5>
        <h5>Address: {props.task.address}</h5>
        <h6>Status: {props.task.status}</h6>
        <button onClick={changeModal} className="btn btn-secondary">
          close
        </button>
      </Modal>
    </div>
  );
};

export default TasksModal;
