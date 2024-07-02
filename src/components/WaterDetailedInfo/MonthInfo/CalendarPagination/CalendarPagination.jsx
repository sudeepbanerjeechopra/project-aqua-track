import css from './CalendarPagination.module.css';
import { useTranslation } from 'react-i18next';

const CalendarPagination = ({ onNextMonth, onPrevMonth, currentDate }) => {
  const { t } = useTranslation();

  const months = {
    1: t('ChooseDate.january'),
    2: t('ChooseDate.february'),
    3: t('ChooseDate.march'),
    4: t('ChooseDate.april'),
    5: t('ChooseDate.may'),
    6: t('ChooseDate.june'),
    7: t('ChooseDate.july'),
    8: t('ChooseDate.august'),
    9: t('ChooseDate.september'),
    10: t('ChooseDate.october'),
    11: t('ChooseDate.november'),
    12: t('ChooseDate.december'),
  };

  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onPrevMonth}>
        {'<'}
      </button>
      <p className={css.currentMonth}>
        {months[currentDate.month] + ', ' + currentDate.year}
      </p>
      <button className={css.button} onClick={onNextMonth}>
        {'>'}
      </button>
    </div>
  );
};

export default CalendarPagination;
