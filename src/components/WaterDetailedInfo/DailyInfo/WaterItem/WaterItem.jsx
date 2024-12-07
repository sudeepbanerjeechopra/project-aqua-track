import { useModalContext } from '../../../../context/useModalContext.jsx';
import { icons as sprite } from '../../../../shared/icons/index.js';
import WaterModal from '../../../WaterModal/WaterModal.jsx';
import DeleteWaterModal from '../../../Modals/DeleteWaterModal/DeleteWaterModal.jsx';
import { format, parseISO, subHours } from 'date-fns';
import { useTranslation } from 'react-i18next';

import css from './WaterItem.module.css';

function WaterItem({ data }) {
  const { t } = useTranslation();
  const { openModal } = useModalContext();

  const { _id: id, amount, date } = data;

  const formatAmount = (amount) => {
    const mlAmount = amount * 1000;
    return `${mlAmount} ${t('dailyInfo.ml')}`;
  };

  const formatTime = (isoString) => {
    const date = subHours(parseISO(isoString), 3);
    return format(date, 'hh:mm a');
  };

  return (
    <div data-tour="step-6" className={css.item} id={id}>
      <svg className={css.svg_glass}>
        <use xlinkHref={`${sprite}#water-glass`} />
      </svg>
      <div className={css.info}>
        <p className={css.info_ml}>{formatAmount(amount)}</p>
        <p className={css.info_time}>{formatTime(date)}</p>
      </div>
      <div className={css.btns}>
        <button
          className={css.btn}
          onClick={() => {
            openModal(
              <WaterModal
                operationType={'edit'}
                recordId={id}
                initialData={{ amount, date }}
              />
            );
          }}
        >
          <svg className={css.svg_edit}>
            <use xlinkHref={`${sprite}#edit`} />
          </svg>
        </button>
        <button
          className={css.btn}
          onClick={() => {
            openModal(<DeleteWaterModal onDelete={id} />);
          }}
        >
          <svg className={css.svg_trash}>
            <use xlinkHref={`${sprite}#trash`} />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default WaterItem;
