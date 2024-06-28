import Calendar from './Calendar/Calendar';
import CalendarPagination from './CalendarPagination/CalendarPagination';
import { icons as sprite } from '../../../shared/icons/index';
import Loader from './Loader/Loader';
import Schedule from './Schedule/Schedule';

import clsx from 'clsx';
import { useEffect, useMemo } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { apiGetWaterMonth } from '../../../redux/water/operation';
import {
  increaseMonth,
  decreaseMonth,
  setToggleInfo,
  setDate,
} from '../../../redux/water/slice';
import {
  selectWaterMonth,
  selectisLoadingMonth,
  selectMonth,
  selectMonthError,
  selectToggleInfo,
  selectDate,
} from '../../../redux/water/selectors';

import css from './MonthInfo.module.css';

const MonthInfo = () => {
  const dispatch = useDispatch();

  const monthArray = useSelector(selectWaterMonth);
  const currentMonth = useSelector(selectMonth);
  const isLoading = useSelector(selectisLoadingMonth);
  const isError = useSelector(selectMonthError);
  const ToggleInfo = useSelector(selectToggleInfo);
  const selectedDate = useSelector(selectDate);

  const formattedMonthArray = useMemo(() => {
    return monthArray.map((day) => {
      return {
        id: day.id,
        date: day.day.split('-')[2],
        value: Math.floor(Number(day.totalAmount) * 1000),
      };
    });
  }, [monthArray]);

  const onNextMonth = () => {
    dispatch(increaseMonth());
  };
  const onPrevMonth = () => {
    dispatch(decreaseMonth());
  };

  const onToggleInfo = () => {
    dispatch(setToggleInfo());
  };
  const onDayChange = (date) => {
    dispatch(setDate(date));
  };

  useEffect(() => {
    dispatch(apiGetWaterMonth(currentMonth));
  }, [dispatch, currentMonth]);

  return (
    <div>
      <div className={css.wrapper}>
        <div className={css.thead}>
          <h3 className={css.title}>{ToggleInfo ? 'Month' : 'Statistics'}</h3>
          <div className={css.pagination}>
            <CalendarPagination
              onNextMonth={onNextMonth}
              onPrevMonth={onPrevMonth}
              currentDate={currentMonth}
            />

            <button
              className={clsx(css.iconBtn, {
                [css.active]: !ToggleInfo,
              })}
              onClick={onToggleInfo}
            >
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#pie-chart-02-1`} />
              </svg>
            </button>
          </div>
        </div>
        {isError && (
          <div className={css.errorMessage}>
            <p>Oops, something is wrong... </p>
          </div>
        )}

        {isLoading && !isError && <Loader />}

        {ToggleInfo && !isError && !isLoading && (
          <Calendar
            month={monthArray}
            date={selectedDate}
            onClick={onDayChange}
          />
        )}

        {!ToggleInfo && !isError && !isLoading && (
          <Schedule data={formattedMonthArray} />
        )}
      </div>
    </div>
  );
};

export default MonthInfo;
