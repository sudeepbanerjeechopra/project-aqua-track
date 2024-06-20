import { useEffect } from 'react';
import Modal from 'react-modal';
import { icons as sprite } from '../../icons/index';
import style from './ModalWindow.module.css';

Modal.setAppElement('#root');

const ModalWindow = ({
  isOpen,
  onRequestClose,
  children,
  shouldCloseOnOverlayClick = true,
}) => {
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

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
      style={{
        overlay: {
          backgroundColor: 'rgba(47, 47, 47, 0.6)',
          zIndex: '15',
          overflow: 'auto',
          display: 'grid',
          placeItems: 'center',
        },
      }}
      className={{
        base: style.modalContent,
        afterOpen: style.modalContentOpen,
        beforeClose: style.beforeClose,
      }}
      closeTimeoutMS={300}
    >
      <button onClick={onRequestClose} className={style.closeButton}>
        <svg className={`${style.iconClose}`}>
          <use xlinkHref={`${sprite}#close`} />
        </svg>
      </button>
      {children}
    </Modal>
  );
};

export default ModalWindow;

// Приклад використання:
// const App = () => {
//   const feedbackModal = useModal();
//   return (
//     <>
//       <button onClick={feedbackModal.openModal}>click</button>

//       <ModalWindow
//         isOpen={feedbackModal.isOpen}
//         onRequestClose={feedbackModal.closeModal}
//       >
//         <div>
//           <h2>Leave a review about</h2>
//           <button>click me</button>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem
//             tempore aliquid, vel nobis, quis, sequi nesciunt odit excepturi
//           </p>
//         </div>
//       </ModalWindow>
//     </>
//   );
// };
