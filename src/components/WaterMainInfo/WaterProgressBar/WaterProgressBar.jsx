import Slider from '@mui/material/Slider';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Box from '@mui/material/Box';
import css from './WaterProgressBar.module.css';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { selectDate, selectEntries } from '../../../redux/water/selectors';
import { selectUser } from '../../../redux/auth/selectors';
const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#9be1a0',
    color: '#ffffff',
    fontSize: '12px',
    borderRadius: '8px',
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: '#9be1a0',
  },
});
function ValueLabelComponent(props) {
  const { children, value, open } = props;
  return (
    <CustomTooltip
      open={open}
      enterTouchDelay={0}
      placement="top"
      title={`${Math.min(value, 100).toFixed(0)}%`}
      // title={`${value}%`}
      arrow
    >
      {children}
    </CustomTooltip>
  );
}
const WaterProgressBar = () => {
  const user = useSelector(selectUser);
  const entries = useSelector(selectEntries);
  const selectedDate = useSelector(selectDate);

  // Обчислюємо загальну кількість води
  const totalWater = entries.reduce((total, entry) => {
    const amount = entry.newWaterRecord?.amount || 0; 
    return total + amount;
  }, 0);

  // Обчислюємо відсоток спожитої води від норми, обмежуючи його до 100%, якщо перевищено норму
  const percent =
    totalWater >= user.dailyWaterNorm
      ? 100
      : (totalWater / user.dailyWaterNorm) * 100;

  // Функція для перевірки, чи співпадає вибрана дата з поточною
  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  // Функція для форматування дати у потрібний формат
  const formatDate = (date) => {
    const dateObj = new Date(date);
    if (isToday(dateObj)) {
      return 'Today';
    } else {
      return dateObj.toLocaleDateString(); 
    }
  };

  return (
    <div className={css.container}>
      <div className={css.title}>{formatDate(selectedDate)}</div>
     
      <Box sx={{ width: '100%', m: 0, p: 0 }}>
        <Slider
          value={percent}
          valueLabelDisplay="auto"
          components={{ ValueLabel: ValueLabelComponent }}
          onChange={() => {}}
          sx={{
            m: 0,
            p: 0,
            color: 'var(--accent)',
            '@media (pointer: coarse)': {
              p: '0 !important',
            },
            '& .MuiSlider-thumb': {
              borderRadius: '16px',
              width: '12px',
              height: '12px',
              color: 'white',
              border: '1px solid var(--accent)',
            },
            '& .MuiSlider-rail': {
              color: 'var(--light-gray)',
              backgroundColor: 'var(--light-gray)',
            },
            '& .MuiSlider-valueLabel': {
              backgroundColor: 'var(--accent)',
              color: 'white',
              borderRadius: '8px',
              padding: '4px 4px',
            },
          }}
        />
        <div className={css.percentBar}>
          <a>0%</a>
          <a className={css.fifty}>50%</a>
          <a>100%</a>
        </div>
      </Box>
    </div>
  );
};
export default WaterProgressBar;
