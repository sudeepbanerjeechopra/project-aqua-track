import { icons as sprite } from '../../../../shared/icons/index.js';
import css from './AddWaterBtn.module.css';

function AddWaterBtn() {
  return (
    <div className={css.wrapper}>
      <button className={css.btn}>
        <svg className={css.svg}>
          <use xlinkHref={`${sprite}#add-water-green`} />
        </svg>
      </button>
      <p className={css.text}>Add water</p>
    </div>
  );
}

export default AddWaterBtn;
