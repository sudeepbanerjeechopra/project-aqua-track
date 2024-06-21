import WaterForm from "../../components/WaterForm/WaterForm.jsx";
import ModalWindow from "../../shared/components/ModalWindow/ModalWindow.jsx";
import { useModal } from "../../hooks/useModal.js";

export const WaterModal = ({ operationType }) => {

    const feedbackModal = useModal();

    const title = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
    const subTitle = operationType === 'add' ? 'Choose a value:' : 'Correct entered data:';
   
  return (
  <>
    <button onClick={feedbackModal.openModal}>click</button>
        
    <ModalWindow
        isOpen={feedbackModal.isOpen}
        onRequestClose={feedbackModal.closeModal}
      >
        <div>
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <WaterForm operationType={operationType} />  
        </div>
    </ModalWindow> 
        
  </>
    )
}

export default WaterModal;
