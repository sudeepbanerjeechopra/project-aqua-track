import MonthInfo from './MonthInfo/MonthInfo';
import Userbar from './Userbar/Userbar';
import DailyInfo from './DailyInfo/DailyInfo';

import css from './WaterDetailedInfo.module.css';

const WaterDetailedInfo = () => {
  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className={css.wrapper}
      data-tour="step-2"
    >
      <Userbar />
      <DailyInfo />
      <MonthInfo />
    </div>
  );
};

export default WaterDetailedInfo;
