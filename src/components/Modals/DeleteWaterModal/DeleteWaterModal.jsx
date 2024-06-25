import { useModalContext } from '../../../context/useModalContext';
import css from './DeleteWaterModal.module.css';
import { useDispatch } from 'react-redux';
//import axios from '../../../helpers/axiosConfig.js';
//import { updateWaterProgressBar, updateWaterList, updateCalendar } from '../../redux/actions'; // буде змінено на потрібні функції

const DeleteWaterModal = () => {
  const { closeModal } = useModalContext();
  const dispatch = useDispatch();

/*  const handleDelete = () => {
    axios.delete(`/api/water/${modalContent.id}`) // буде змінено на правильний шлях
      .then(response => {
        if (response.status === 200) {
          dispatch(updateWaterProgressBar());
          dispatch(updateWaterList());
          dispatch(updateCalendar());
          closeModal();
        } else {
          alert('Failed to delete the entry.');
        }
      })
      .catch(error => {
        alert('Failed to delete the entry.');
      }); 

    dispatch(updateWaterProgressBar());
    dispatch(updateWaterList());
    dispatch(updateCalendar());
    closeModal();
  }; */

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