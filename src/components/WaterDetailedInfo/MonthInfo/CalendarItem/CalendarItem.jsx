import clsx from 'clsx';
import css from './CalendarItem.module.css';

const CalendarItem = ({ date, isActive, onClick }) => {
  const percentages = Math.floor(Number(date.percentComplete));
  const currentDate = new Date().toLocaleDateString('sv-SE');
  return (
    <li className={css.element} onClick={() => onClick(date.day)}>
      <div
        className={clsx(css.number, {
          [css.notFull]: Number(date.percentComplete) < 100,
          [css.active]: isActive,
          [css.current]: currentDate === date.day && !isActive,
        })}
      >
        {date.day.split('-')[2]}
      </div>
      <span className={css.percentages}>
        {percentages < 100 ? percentages : 100}%
      </span>
    </li>
  );
};

export default CalendarItem;
