import WaterForm from "../../components/WaterForm/WaterForm.jsx";
import { useModalContext } from '../../context/useModalContext';
import css from './WaterModal.module.css';

export const WaterModal = ({ operationType }) => {

  const { closeModal } = useModalContext();
  
    const title = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
    const subTitle = operationType === 'edit' ? 'Choose a value:' : 'Correct entered data:';

  return (
          <div className={css.modalWater}>
          <h2 className={css.titleWaterModal}>{title}</h2>
          <p className={css.subTitleWaterModal}>{subTitle}</p>
        <WaterForm operationType={operationType} /> 
        
      <button onClick={closeModal}>Yes</button>
      <button
        onClick={() => {
          closeModal();
        }}
      >
        No
      </button>
          </div>      

    )
}

export default WaterModal;
