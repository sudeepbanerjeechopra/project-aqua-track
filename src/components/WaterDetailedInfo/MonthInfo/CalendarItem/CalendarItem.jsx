import clsx from 'clsx';
import css from './CalendarItem.module.css';

// Imitation
function getRandomNumber() {
  return Math.floor(Math.random() * 2) + 1;
}
function getRandomPercentage() {
  return Math.floor(Math.random() * 100);
}
// ////////
const CalendarItem = ({ day }) => {
  // Imitation
  const check = getRandomNumber();
  // //////
  return (
    <li className={css.element}>
      <div
        className={clsx(css.number, {
          [css.notFull]: check === 2,
        })}
      >
        {day.getDate()}
      </div>
      <span className={css.percentages}>
        {check === 2 ? getRandomPercentage() : '100'}%
      </span>
    </li>
  );
};

export default CalendarItem;
