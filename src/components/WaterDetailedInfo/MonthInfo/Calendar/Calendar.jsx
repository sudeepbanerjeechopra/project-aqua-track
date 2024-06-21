import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';

const Calendar = ({ month }) => {
  return (
    <ul className={css.calendar}>
      {month.map((day, index) => {
        return <CalendarItem key={index} day={day}></CalendarItem>;
      })}
    </ul>
  );
};

export default Calendar;
