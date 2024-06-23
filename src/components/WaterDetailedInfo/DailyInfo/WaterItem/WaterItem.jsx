import { icons as sprite } from '../../../../shared/icons/index.js';

import css from './WaterItem.module.css';

function WaterItem() {
  return (
    <div className={css.item}>
      <svg className={css.svg} width="38" height="38">
        <use xlinkHref={`${sprite}#water-glass`} />
      </svg>
      <div className={css.info}>
        <p className={css.info_ml}>250 ml</p>
        <p className={css.info_time}>7:00 AM</p>
      </div>
      <div className={css.btns}>
        <button className={css.btn}>
          <svg className={css.svg} width="14" height="14">
            <use xlinkHref={`${sprite}#edit`} />
          </svg>
        </button>
        <button className={css.btn}>
          <svg className={css.svg} width="14" height="14">
            <use xlinkHref={`${sprite}#trash`} />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default WaterItem;
