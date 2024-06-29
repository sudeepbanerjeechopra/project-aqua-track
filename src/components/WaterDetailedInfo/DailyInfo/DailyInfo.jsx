import { useEffect } from 'react';
import WaterList from './WaterList/WaterList';
import ChooseData from './ChooseDate/ChooseDate';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import CustomScrollBar from '../../../shared/components/CustomScrollWrapper/CustomScrollWrapper';
import css from './DailyInfo.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectWaterDay } from '../../../redux/water/selectors';
import { apiGetWaterDay } from '../../../redux/water/operation';

function DailyInfo() {
  const waterDay = useSelector(selectWaterDay);
  const dispatch = useDispatch();
  const currentDate = new Date().toISOString().split('T')[0];

  useEffect(() => {
    if (waterDay.length === 0) {
      dispatch(apiGetWaterDay(currentDate));
    }
  }, [waterDay, dispatch, currentDate]);

  return (
    <div className={css.wrapper}>
      <div className={css.dataEntryContainer}>
        <ChooseData />
        <AddWaterBtn />
      </div>
      {waterDay.length > 0 ? (
        <CustomScrollBar>
          <WaterList waterDay={waterDay} />
        </CustomScrollBar>
      ) : (
        <div className={css.text}>
          <p>{`You haven't drunk water yet, maybe it's time to drink?`}</p>
        </div>
      )}
    </div>
  );
}

export default DailyInfo;
