import { useSelector } from "react-redux";
import "./MyModal.css";

const MyModal = ({ closeModal }) => {
  const users = useSelector((state) => state.isSubmit);

  if (users.command === "INSERT") {
    return (
      <>
        <div className="modalWrapper" onClick={closeModal}></div>
        <div className="modalContainer">
          <h3> Information sent successfully.</h3>
          <button onClick={closeModal}>Okay</button>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="modalWrapper" onClick={closeModal}></div>
        <div className="modalContainer">
          <h3>Something went wrong!!</h3>
          <p style={{ color: "red" }}>{users}</p>
          <button onClick={closeModal}>Okay</button>
        </div>
      </>
    );
  }
};

export default MyModal;
