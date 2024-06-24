import { NavLink } from 'react-router-dom';
import Logo from '../../../../shared/components/Logo/Logo';
import style from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className={style.welcome}>
      <Logo className={style.welcomeLogo} />
      <p className={style.welcomeText}>Record daily water intake and track</p>
      <h1 className={style.welcomeTitle}>Water consumption tracker</h1>
      <div className={style.welcomeBtn}>
        <NavLink to="/signup" className={style.welcomeTryTracker}>
          Try tracker
        </NavLink>
        <NavLink to="/signin" className={style.welcomeSignIn}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default Welcome;
