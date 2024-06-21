import css from './CalendarItem.module.css';

const CalendarItem = ({ day }) => {
  return (
    <li className={css.element}>
      <div className={css.number}>{day.getDate()}</div>
      <span className={css.percentages}>100%</span>
    </li>
  );
};

export default CalendarItem;
