import { useDispatch, useSelector } from 'react-redux';
import { useModalContext } from '../../context/useModalContext';

import ModalWindow from '../../shared/components/ModalWindow/ModalWindow';

const Modals = () => {
  const dispatch = useDispatch();
  const { modalContent } = useModalContext();
  const isOpen = useSelector((state) => state.modal.isOpen);

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <ModalWindow isOpen={isOpen} onRequestClose={handleCloseModal}>
      {modalContent}
    </ModalWindow>
  );
};

export default Modals;
