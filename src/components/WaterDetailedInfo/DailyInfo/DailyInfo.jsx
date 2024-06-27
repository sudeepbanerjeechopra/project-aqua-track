import WaterList from './WaterList/WaterList';
import ChooseData from './ChooseDate/ChooseDate';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import CustomScrollBar from '../../../shared/components/CustomScrollWrapper/CustomScrollWrapper';
import css from './DailyInfo.module.css';

function DailyInfo() {
  return (
    <div className={css.wrapper}>
      <div className={css.dataEntryContainer}>
        <ChooseData />
        <AddWaterBtn />
      </div>
      <CustomScrollBar>
        <WaterList />
      </CustomScrollBar>
    </div>
  );
}

export default DailyInfo;
