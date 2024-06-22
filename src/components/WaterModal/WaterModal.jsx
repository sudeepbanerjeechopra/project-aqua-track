import WaterForm from "../../components/WaterForm/WaterForm.jsx";
import ModalWindow from "../../shared/components/ModalWindow/ModalWindow.jsx";
import { useModal } from "../../hooks/useModal.js";
import css from './WaterModal.module.css';

export const WaterModal = ({ operationType }) => {

    const feedbackModal = useModal();

    const title = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
    const subTitle = operationType === 'edit' ? 'Choose a value:' : 'Correct entered data:';

  return (
  <>
    <button onClick={feedbackModal.openModal}>click</button>
        
    <ModalWindow
        isOpen={feedbackModal.isOpen}
        onRequestClose={feedbackModal.closeModal}
      >
        <div className="modal-content">
          <div className={css.modalWater}>
          <h2 className={css.titleWaterModal}>{title}</h2>
          <p className={css.subTitleWaterModal}>{subTitle}</p>
          <WaterForm operationType={operationType} />  
          </div>
          </div>
    </ModalWindow> 
        
  </>
    )
}

export default WaterModal;
