import css from "./LogOutModal.module.css";
import { useModalContext } from "../../../context/useModalContext.jsx"

const LogOutModal = () => {
  const { closeModal } = useModalContext();
    return (
      
    <div className={css.modalContent}>
      <h2 className={css.title}>Log Out</h2>
      <p className={css.text}>Do you really want to leave?</p>
      <div className={css.buttonContainer}>
        <button
          className={css.logoutButton}
          onClick={() => {
            alert('Log Out clicked');
            closeModal();
          }}
        >
          Log Out
        </button>
        <button className={css.cancelButton} onClick={closeModal}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
