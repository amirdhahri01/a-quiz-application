import { useGlobalContext } from "../Context/Context";

const Modal = () => {
  const [model, openModel, closeModel, correct, questions] = useGlobalContext();
  return (
    <div className={model ? "modal-container isOpen" : "modal-container"}>
      <div className="modal-content">
        <h2>congrats</h2>
        <p>You answered {((correct / questions) * 100).toFixed(0)}%</p>
        <button
          className="close-btn"
          onClick={() => {
            closeModel();
          }}
        >
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
