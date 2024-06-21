import Calendar from './Calendar/Calendar';
import CalendarPagination from './CalendarPagination/CalendarPagination';
import { icons as sprite } from '../../../shared/icons/index';
// import Schedule from './Schedule/Schedule';
import { useState } from 'react';

import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [toggleStaticstic, setToggleStaticstic] = useState(true);

  const startOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1);
  const endOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const getDays = (data) => {
    const start = startOfMonth(data);
    const end = endOfMonth(data);
    const days = [];

    for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
      days.push(new Date(day));
    }
    return days;
  };

  const days = getDays(currentDate);

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.thead}>
          <h3 className={css.title}>
            {toggleStaticstic ? 'Month' : 'Statistics'}
          </h3>
          <div className={css.pagination}>
            <CalendarPagination
              onNextMonth={handleNextMonth}
              onPrevMonth={handlePrevMonth}
              currentDate={currentDate}
            />
            <div
              className={css.iconDiv}
              onClick={() => setToggleStaticstic((prev) => !prev)}
            >
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#pie-chart-02-1`} />
              </svg>
            </div>
          </div>
        </div>
        {
          toggleStaticstic ? (
            <Calendar month={days} />
          ) : (
            <p>Schedule</p>
          ) /*<Schedule />*/
        }
      </div>
    </div>
  );
};

export default MonthInfo;
