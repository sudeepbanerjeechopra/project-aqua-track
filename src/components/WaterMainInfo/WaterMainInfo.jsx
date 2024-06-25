import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import WaterDailyNorma from './WaterDailyNorma/WaterDailyNorma';
import WaterProgressBar from './WaterProgressBar/WaterProgressBar';

import css from './WaterMainInfo.module.css';

import { default as bottel1x } from '../../shared/images/trackerPage/bottel@x1.webp';

const WaterMainInfo = () => {
  return (
    <div className={css.container}>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn />
      <div className={css.imageContainer}>
        <img
          className={css.image}
          src={bottel1x}
          // srcSet={`${bottel1x} 1x, ${bottel2x} 2x`}
          alt="Water bottel image"
        />
      </div>
    </div>
  );
;
};

export default WaterMainInfo;
