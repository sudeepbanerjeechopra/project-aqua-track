import { useSelector } from 'react-redux';
import { useMedia } from '../../../../hooks/useMedia';
import { selectDate } from '../../../../redux/water/selectors';
import css from './CalendarPagination.module.css';
import { useTranslation } from 'react-i18next';

const CalendarPagination = ({
  onNextMonth,
  onPrevMonth,
  currentDate,
  onTodayClick,
}) => {
  const { t } = useTranslation();
  const { isDesktop, isTablet } = useMedia();
  const selectedDate = useSelector(selectDate);

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

  const handleTodayClick = () => {
    onTodayClick(new Date());
  };
  const isTodayVisible = () => {
    const today = selectedDate === new Date().toLocaleDateString('sv-SE');
    return today;
  };

  return (
    <>
      {(isDesktop || isTablet) && !isTodayVisible() && (
        <button className={css.buttonToday} onClick={handleTodayClick}>
          Today
        </button>
      )}
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
    </>
  );
};

export default CalendarPagination;
