import { useState, useEffect } from 'react';
import { selectDate } from '../../../../redux/water/selectors';
import css from './ChooseDate.module.css';
import { useSelector } from 'react-redux';

function ChooseDate() {
  const currentDate = useSelector(selectDate);
  const [formattedDate, setFormattedDate] = useState('');

  const todayDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const formatDisplayDate = (dateString) => {
    const dateObj = new Date(dateString);
    const day = String(dateObj.getDate());
    const month = dateObj.toLocaleString('en-US', { month: 'long' });
    return `${day}, ${month}`;
  };

  const today = todayDate();

  useEffect(() => {
    if (currentDate === today) {
      return setFormattedDate('Today');
    } else {
      setFormattedDate(formatDisplayDate(currentDate));
    }
  }, [currentDate, today]);

  return (
    <div className={css.wrapper}>
      {<h3 className={css.date}>{formattedDate}</h3>}
    </div>
  );
}

export default ChooseDate;
