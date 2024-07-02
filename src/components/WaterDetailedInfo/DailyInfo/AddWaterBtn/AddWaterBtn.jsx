import { useModalContext } from '../../../../context/useModalContext.jsx';
import { icons as sprite } from '../../../../shared/icons/index.js';
import WaterModal from '../../../WaterModal/WaterModal';
import css from './AddWaterBtn.module.css';
import { useTranslation } from 'react-i18next';

function AddWaterBtn() {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  return (
    <div className={css.wrapper} data-tour="step-5">
      <button
        className={css.btn}
        onClick={() => openModal(<WaterModal operationType={'add'} />)}
      >
        <svg className={css.svg}>
          <use xlinkHref={`${sprite}#plus-add-water`} />
        </svg>
      </button>
      <p className={css.text}>{t('waterMainInfo.btn')}</p>
    </div>
  );
}

export default AddWaterBtn;
