import { useEffect } from 'react';
import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';
import { apiGetWaterDay } from '../../../../redux/water/operation';
import { useDispatch, useSelector } from 'react-redux';
import { selectDate } from '../../../../redux/water/selectors';

function WaterList({ waterDay }) {
  const currentDay = useSelector(selectDate);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetWaterDay(currentDay));
  }, [currentDay, dispatch]);

  return (
    <ul className={css.list}>
      {waterDay.map((data, index) => (
        <WaterItem key={index} data={data} />
      ))}
    </ul>
  );
}

export default WaterList;
