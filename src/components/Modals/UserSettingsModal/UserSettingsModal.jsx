import { useModalContext } from '../../../context/useModalContext';
import css from './UserSettingsModal.module.css';
import ModalWindow from '../../../shared/components/ModalWindow/ModalWindow';
import { useEffect, useRef, useState } from 'react';
import { icons as sprite } from '../../../shared/icons/index';

const UserSettingsModal = ({
  isOpen,
  onRequestClose,
  children,
  shouldCloseOnOverlayClick = true,
}) => {
  const { closeModal } = useModalContext();
  const [avatarFile, setAvatarFile] = useState(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const hiddenFileInput = useRef(null);

  const handleClick = (event) => {
    event.preventDefault();
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
    }
  };

  const handleChange = (event) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0];
      setAvatarFile(fileUploaded);
    }
  };

  return (
    <ModalWindow
      isOpen={true}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <div className={css.wrapper}>
        <form onSubmit={undefined} className={css.form}>
          <div className={css.userPic}>
            <h2>Setting</h2>
            <div className={css.picWrapper}>
              <div className={css.pic}>
                <img
                  src={
                    avatarFile
                      ? URL.createObjectURL(avatarFile)
                      : 'https://st.depositphotos.com/1537427/3571/v/450/depositphotos_35717211-stock-illustration-vector-user-icon.jpg'
                  }
                  alt="avatar"
                />
              </div>
              <div className={css.uploadWrapper} onClick={handleClick}>
                <svg className={css.iconUpload}>
                  <use xlinkHref={`${sprite}#upload`} />
                </svg>
                <div className={css.textUpload}>Upload a photo</div>
              </div>
              <input
                type="file"
                onChange={handleChange}
                ref={hiddenFileInput}
                style={{ display: 'none' }}
              />
            </div>
          </div>
          <div className={css.inputs}></div>
          <div className={css.buttonContainer}></div>
        </form>
      </div>
    </ModalWindow>
  );
};

export default UserSettingsModal;
