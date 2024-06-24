import React, { useEffect } from 'react';
import { useModalContext } from '../../../context/useModalContext';
import css from './DeleteWaterModal.module.css';
//import { icons as sprite } from '../../../shared/icons/index';
import { useDispatch } from 'react-redux';
import { updateWaterProgressBar, updateWaterList, updateCalendar } from '../../redux/actions';

/* <svg onClick={closeModal} className={`${style.iconClose}`}>
          <use xlinkHref={`${sprite}#close`} />
</svg>*/

const DeleteWaterModal = () => {
  const { closeModal } = useModalContext();
  const dispatch = useDispatch();
      
  const handleDelete = () => {
    // axios.delete(`/api/water/${modalContent.id}`)
    //   .then(response => {
    //     if (response.status === 200) {
    //       dispatch(updateWaterProgressBar());
    //       dispatch(updateWaterList());
    //       dispatch(updateCalendar());
    //       closeModal();
    //     } else {
    //       alert('Не вдалося видалити запис.');
    //     }
    //   })
    //   .catch(error => {
    //     alert('Не вдалося видалити запис.');
    //   });

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
      <div className={css.deleteModalBackground}>
        <h2 className={css.title}>Delete entry</h2>
        <p className={css.paragraf}>Are you sure you want to delete the entry?</p>
        <div className={css.buttons}>
            <button className={css.button-1} onClick={handleDelete} type='button'>Delete</button>
            <button className={css.button-2} onClick={closeModal} type='button'>Cancel</button>
      </div>
    </div>
  );
};

export default DeleteWaterModal;

