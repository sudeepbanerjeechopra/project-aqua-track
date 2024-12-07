import CalendarItem from '../CalendarItem/CalendarItem';
import css from './Calendar.module.css';

const Calendar = ({ month, date, onClick }) => {
  if (month.length === 0) return null;
  return (
    <ul className={css.calendar}>
      {month.map((day, index) => {
        return (
          <CalendarItem
            key={index}
            date={day}
            isActive={date == day.day}
            onClick={onClick}
          ></CalendarItem>
        );
      })}
    </ul>
  );
};

export default Calendar;
