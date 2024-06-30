import { useSelector } from 'react-redux';
import { selectUser } from '../../../redux/auth/selectors';
import css from './WaterDailyNorma.module.css';

const WaterDailyNorma = () => {
  const user = useSelector(selectUser);

  const dailyUserGoal = user.dailyWaterNorm;

  return (
    <div className={css.dailyNorma}>
      <a className={css.title}>{dailyUserGoal} L</a>
      <a className={css.subtitle}>My daily norma</a>
    </div>
  );
};

export default WaterDailyNorma;
