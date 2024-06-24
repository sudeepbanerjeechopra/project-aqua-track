import React, { useEffect } from 'react';
import { useModalContext } from '../../../context/useModalContext';
import css from './DeleteWaterModal/DeleteWaterModal'
import { icons as sprite } from '../../../shared/icons/index';
import { useDispatch } from 'react-redux';
import { updateWaterProgressBar, updateWaterList, updateCalendar } from '../../redux/actions';


const DeleteWaterModal = () => {
    const { closeModal } = useModalContext();

      const dispatch = useDispatch();
      const handleDelete = () => {
    // Приклад: axios.delete(`/api/water/${modalContent.id}`)
    // .then(response => {
    //   if (response.status === 200) {
    //     dispatch(updateWaterProgressBar());
    //     dispatch(updateWaterList());
    //     dispatch(updateCalendar());
    //     closeModal();
    //   } else {
    //     // Обробка помилки і показ повідомлення
    //     alert('Не вдалося видалити запис.');
    //   }
    // })
    // .catch(error => {
    //   // Обробка помилки і показ повідомлення
    //   alert('Не вдалося видалити запис.');
    // });

    dispatch(updateWaterProgressBar());
    dispatch(updateWaterList());
    dispatch(updateCalendar());
    closeModal();
    };
    
    const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
      <div>
          {modalContent}
          <svg onClick={closeModal} className={`${style.iconClose}`}>
              <use xlinkHref={`${sprite}#close`} />
          </svg>
          <h2>Delete entry</h2>
          <p>Are you sure you want to delete the entry?</p>
          <div>
              <button onclick={handleDelete} type='button'>Delete</button>
              <button onClick={closeModal} type='button'>Cancel</button>
          </div>
    </div>
  );
};

export default DeleteWaterModal;
