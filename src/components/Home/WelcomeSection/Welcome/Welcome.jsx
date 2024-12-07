import { NavLink } from 'react-router-dom';
import WrapperWelcome from '../../../../shared/components/WrapperWelcome/WrapperWelcome';
import style from './Welcome.module.css';
import { useAuth } from '../../../../hooks/useAut';
import { useTranslation } from 'react-i18next';

const Welcome = () => {
  const { isLoggedIn } = useAuth();
  const { t } = useTranslation();

  return (
    <WrapperWelcome
      classNameLogo={style.wrapperLogo}
      classNameWelcom={style.sizeWrapper}
    >
      <div className={style.mainInfo}>
        <p className={style.welcomeText}>{t('welcomeSection.mainText')}</p>
        <h1 className={style.welcomeTitle}>{t('welcomeSection.title')}</h1>
        <div className={style.welcomeBtn}>
          {isLoggedIn ? (
            <NavLink to="/tracker" className={style.welcomeTryTracker}>
              {t('welcomeSection.tryTracker')}
            </NavLink>
          ) : (
            <NavLink to="/signup" className={style.welcomeTryTracker}>
              {t('welcomeSection.tryTracker')}
            </NavLink>
          )}
          <NavLink to="/signin" className={style.welcomeSignIn}>
            {t('welcomeSection.signIn')}
          </NavLink>
        </div>
      </div>
    </WrapperWelcome>
  );
};

export default Welcome;
