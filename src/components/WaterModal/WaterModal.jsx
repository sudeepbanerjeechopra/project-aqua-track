
import WaterForm from "../../components/WaterForm/WaterForm";
import style from './WaterModal.module.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { updateWaterAmount } from "../../redux/water/slice";
import {selectLoading, selectError  } from "../../redux/water/selectors.js";

const WaterModal = ({ operationType }) => {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
        dispatch(updateWaterAmount());     
    }, [dispatch]);

    const title = operationType === 'add' ? 'Add water' : 'Edit the entered amount of water';
    const subTitle = operationType === 'edit' ? 'Choose a value:' : 'Correct entered data:';

  return  (
          <div className={style.modalWater}>
            <h2 className={style.titleWaterModal}>{title}</h2>
            <p className={style.subTitleWaterModal}>{subTitle}</p>
      <WaterForm operationType={operationType} /> 
      {loading}
      {error}
        </div>
    )
}

export default WaterModal;
