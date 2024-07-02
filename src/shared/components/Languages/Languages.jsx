import { useTranslation } from 'react-i18next';
import style from './Languages.module.css';
import { icons as sprite } from '../../../shared/icons';

const Languages = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
      <header className={style.languages}>
        <button
          className={style.languageBtn}
          onClick={() => changeLanguage('en')}
        >
          <svg width="18" height="18" className={style.iconFlag}>
            <use xlinkHref={`${sprite}#en-flag`}></use>
          </svg>
        </button>
        <span className={style.line}>|</span>
        <button
          className={style.languageBtn}
          onClick={() => changeLanguage('uk')}
        >
          <svg width="18" height="18" className={style.iconFlag}>
            <use xlinkHref={`${sprite}#ua-flag`}></use>
          </svg>
        </button>
      </header>
    </>
  );
};

export default Languages;
