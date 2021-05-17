import Modal from "react-modal";
import PropTypes from "prop-types";

const HomePageModal = ({ modalState, closeModal }) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "60%",
      height: "50%",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
  };

  return (
    <Modal isOpen={modalState} onRequestClose={closeModal} style={customStyles}>
      <h2>Welcome to the ATX Animals Web Application!</h2>
      <h5>
        Some features are not available unless you have an admin account! To
        test admin/employee features, log in with the following information:
      </h5>
      <ul>
        Email:
        <li>jared@jared.com</li>
        Password:
        <li>jared</li>
      </ul>
    </Modal>
  );
};

export default HomePageModal;

HomePageModal.propTypes = {
  modalState: PropTypes.Boolean,
  closeModal: PropTypes.Function,
};
