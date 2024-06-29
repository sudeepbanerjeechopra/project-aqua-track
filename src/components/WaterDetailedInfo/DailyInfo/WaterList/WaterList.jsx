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
    if (waterDay.length === 0) {
      dispatch(apiGetWaterDay(currentDay));
    }
  }, [currentDay, dispatch, waterDay]);

  console.log(waterDay);

  return (
    <ul className={css.list}>
      {waterDay.map((data) => (
        <li key={data.id}>
          <WaterItem data={data} />
        </li>
      ))}
    </ul>
  );
}

export default WaterList;
