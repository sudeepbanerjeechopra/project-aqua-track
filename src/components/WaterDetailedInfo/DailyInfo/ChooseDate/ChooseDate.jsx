import { useState } from 'react';
import css from './ChooseDate.module.css';

function ChooseDate() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const formatDate = (date) => {
    const today = new Date();

    if (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    ) {
      return 'Today';
    } else {
      return `${date.getDate()}, ${date.toLocaleDateString('en-US', { month: 'long' })}`;
    }
  };

  return (
    <div className={css.wrapper}>
      {<h3 className={css.date}>{formatDate(selectedDate)}</h3>}
      <input
        className={css.input}
        type="date"
        value={selectedDate.toISOString().substr(0, 10)}
        onChange={(e) => setSelectedDate(new Date(e.target.value))}
      />
    </div>
  );
}

export default ChooseDate;
