import { useModalContext } from '../../../context/useModalContext';
import css from './DeleteWaterModal.module.css';

const DeleteWaterModal = () => {
  const { closeModal } = useModalContext();

  return (
    <div className={css.deleteModalBackground}>
      <h2 className={css.title}>Delete entry</h2>
      <p className={css.paragraf}>Are you sure you want to delete the entry?</p>
      <div className={css.buttons}>
        <button className={css.button-1} type='button'>Delete</button>
        <button className={css.button-2} onClick={closeModal} type='button'>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;