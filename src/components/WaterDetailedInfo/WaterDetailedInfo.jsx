import MonthInfo from './MonthInfo/MonthInfo';
import Userbar from './Userbar/Userbar';
import DailyInfo from './DailyInfo/DailyInfo';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <div className={css.wrapper}>
      <Userbar />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
