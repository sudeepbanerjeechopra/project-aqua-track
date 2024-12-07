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
  selectMonthError,
  selectToggleInfo,
  selectMonth,
  selectDate,
} from '../../../redux/water/selectors';

import css from './MonthInfo.module.css';
import { useTranslation } from 'react-i18next';

const MonthInfo = () => {
  const { t } = useTranslation();
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
  const handleTodayClick = (date) => {
    dispatch(setDate(date.toLocaleDateString('sv-SE')));
  };

  useEffect(() => {
    dispatch(apiGetWaterMonth(currentMonth));
  }, [dispatch, currentMonth]);

  return (
    <div>
      <div className={css.wrapper} data-tour="step-8">
        <div className={css.thead}>
          <h3 className={css.title}>
            {ToggleInfo ? t('monthInfo.mouth') : t('monthInfo.statistics')}
          </h3>
          <div className={css.pagination}>
            <CalendarPagination
              onNextMonth={onNextMonth}
              onPrevMonth={onPrevMonth}
              currentDate={currentMonth}
              onTodayClick={handleTodayClick}
            />

            <button
              className={clsx(css.iconBtn, {
                [css.active]: !ToggleInfo,
              })}
              onClick={onToggleInfo}
              data-tour="step-9"
            >
              <svg width="20" height="20">
                <use xlinkHref={`${sprite}#pie-chart-02-1`} />
              </svg>
            </button>
          </div>
        </div>
        {isError && (
          <div className={css.errorMessage}>
            <p>{t('monthInfo.error')}</p>
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
