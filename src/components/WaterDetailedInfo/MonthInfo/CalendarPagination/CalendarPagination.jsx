import css from './CalendarPagination.module.css';
const months = {
  1: 'January',
  2: 'February',
  3: 'March',
  4: 'April',
  5: 'May',
  6: 'June',
  7: 'July',
  8: 'August',
  9: 'September',
  10: 'October',
  11: 'November',
  12: 'December',
};
const CalendarPagination = ({ onNextMonth, onPrevMonth, currentDate }) => {
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
