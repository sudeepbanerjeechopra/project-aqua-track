import { useEffect } from 'react';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import { apiGetWaterDay } from '../../../../redux/water/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../../../../redux/water/selectors';

function WaterList() {
  const currentDay = useSelector(selectDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetWaterDay(currentDay));
  }, [currentDay, dispatch]);

  return (
    <div className={css.list}>
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
    </div>
  );
}

export default WaterList;
