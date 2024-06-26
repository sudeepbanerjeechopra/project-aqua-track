
import WaterForm from "../../components/WaterForm/WaterForm";
import style from './WaterModal.module.css';

const WaterModal = ({ operationType }) => {

    const title = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
    const subTitle = operationType === 'edit' ? 'Choose a value:' : 'Correct entered data:';

  return  (
          <div className={style.modalWater}>
            <h2 className={style.titleWaterModal}>{title}</h2>
            <p className={style.subTitleWaterModal}>{subTitle}</p>
      <WaterForm operationType={operationType} /> 
        </div>
    )
}

export default WaterModal;
