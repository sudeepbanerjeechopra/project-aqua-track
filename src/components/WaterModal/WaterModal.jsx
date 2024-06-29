
import WaterForm from "../../components/WaterForm/WaterForm";
import style from './WaterModal.module.css';

const WaterModal = ({ operationType, recordId }) => {

  const title = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
  const subTitle = operationType === 'edit' ? 'Choose a value:' : 'Correct entered data:';
  
      console.log('WaterModal - Record ID:', recordId);

  return  (
          <div className={style.modalWater}>
            <h2 className={style.titleWaterModal}>{title}</h2>
            <p className={style.subTitleWaterModal}>{subTitle}</p>
            <WaterForm operationType={operationType} recordId={recordId} />
          </div>
    )
}

export default WaterModal;
