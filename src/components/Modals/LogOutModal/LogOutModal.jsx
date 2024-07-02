import css from './LogOutModal.module.css';
import { useModalContext } from '../../../context/useModalContext.jsx';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../redux/auth/operation.js';
import { useTranslation } from 'react-i18next';

const LogOutModal = () => {
  const { closeModal } = useModalContext();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  return (
    <div className={css.modalContent}>
      <div className={css.wrapperText}>
        <h2 className={css.title}>{t('modals.logOut.title')}</h2>
        <p className={css.text}>{t('modals.logOut.text')}</p>
      </div>
      <div className={css.buttonContainer}>
        <button
          className={css.logoutButton}
          onClick={() => {
            dispatch(logOut());
            closeModal();
          }}
        >
          {t('modals.logOut.logOut')}
        </button>
        <button className={css.cancelButton} onClick={closeModal}>
          {t('modals.logOut.cancel')}
        </button>
      </div>
    </div>
  );
};

export default LogOutModal;
