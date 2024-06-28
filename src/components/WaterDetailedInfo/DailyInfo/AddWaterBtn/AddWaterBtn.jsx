import { useModalContext } from '../../../../context/useModalContext.jsx';
import { icons as sprite } from '../../../../shared/icons/index.js';
import WaterModal from '../../../WaterModal/WaterModal';
import css from './AddWaterBtn.module.css';

function AddWaterBtn() {
  const { openModal } = useModalContext();

  return (
    <div className={css.wrapper}>
      <button
        className={css.btn}
        onClick={() => openModal(<WaterModal operationType={'add'} />)}
      >
        <svg className={css.svg}>
          <use xlinkHref={`${sprite}#add-water-green`} />
        </svg>
      </button>
      <p className={css.text}>Add water</p>
    </div>
  );
}

export default AddWaterBtn;
