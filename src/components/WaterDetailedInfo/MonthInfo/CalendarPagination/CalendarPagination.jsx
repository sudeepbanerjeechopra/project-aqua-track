import css from './CalendarPagination.module.css';
const months = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};
const CalendarPagination = ({ onNextMonth, onPrevMonth, currentDate }) => {
  return (
    <div className={css.wrapper}>
      <button className={css.button} onClick={onPrevMonth}>
        {'<'}
      </button>
      <p className={css.currentMonth}>
        {months[currentDate.getMonth()] + ', ' + currentDate.getFullYear()}
      </p>
      <button className={css.button} onClick={onNextMonth}>
        {'>'}
      </button>
    </div>
  );
};

export default CalendarPagination;
