import { NavLink } from 'react-router-dom';
import WrapperWelcome from '../../../../shared/components/WrapperWelcome/WrapperWelcome';
import style from './Welcome.module.css';
import { useAuth } from '../../../../hooks/useAut';

const Welcome = () => {
  const { isLoggedIn } = useAuth();
  return (
    <WrapperWelcome
      classNameLogo={style.wrapperLogo}
      classNameWelcom={style.sizeWrapper}
    >
      <div className={style.mainInfo}>
        <p className={style.welcomeText}>Record daily water intake and track</p>
        <h1 className={style.welcomeTitle}>Water consumption tracker</h1>
        <div className={style.welcomeBtn}>
          {isLoggedIn ? (
            <NavLink to="/tracker" className={style.welcomeTryTracker}>
              Try tracker
            </NavLink>
          ) : (
            <NavLink to="/signup" className={style.welcomeTryTracker}>
              Try tracker
            </NavLink>
          )}
          <NavLink to="/signin" className={style.welcomeSignIn}>
            Sign In
          </NavLink>
        </div>
      </div>
    </WrapperWelcome>
  );
};

export default Welcome;
