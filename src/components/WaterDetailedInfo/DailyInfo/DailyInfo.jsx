import WaterList from './WaterList/WaterList';
import ChooseData from './ChooseDate/ChooseDate';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import CustomScrollBar from '../../../shared/components/CustomScrollWrapper/CustomScrollWrapper';
import css from './DailyInfo.module.css';
import { useSelector } from 'react-redux';
import { selectWaterDay } from '../../../redux/water/selectors';

function DailyInfo() {
  const waterDay = useSelector(selectWaterDay);

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
          <p>You havent drunk water yet, maybe its time to drink ?</p>
        </div>
      )}
    </div>
  );
}

export default DailyInfo;
