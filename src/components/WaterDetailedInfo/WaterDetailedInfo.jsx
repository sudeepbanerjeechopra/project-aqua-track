import MonthInfo from './MonthInfo/MonthInfo';
import Userbar from './Userbar/Userbar';
import DailyInfo from './DailyInfo/DailyInfo';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <div className={css.wrapper} data-tour="step-2">
      <Userbar />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
