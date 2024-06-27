import clsx from 'clsx';
import css from './AddWaterBtn.module.css';
import { icons as sprite } from '../../../shared/icons/index';
import { useModalContext } from '../../../context/useModalContext';
import WaterModal from '../../WaterModal/WaterModal';


const AddWaterBtn = ({ isPrimary = true }) => {
  const { openModal } = useModalContext();

  return (
    <div>
      <button
        className={clsx(css.btn, {
          [css.btn__Primary]: isPrimary,
          [css.btn__Secondary]: !isPrimary,
        })}
        type="button"
      
        onClick={() => openModal(<WaterModal operationType={'add'}/>)}
      >
        <svg
          className={clsx(css.btn__svg, { [css.btn__svg_primary]: isPrimary })}
          width="24"
          height="24"
        >
          <use xlinkHref={`${sprite}#plus-add-water`} />
        </svg>
        Add water
      </button>
    </div>
  );
};

export default AddWaterBtn;
