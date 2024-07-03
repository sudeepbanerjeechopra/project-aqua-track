import { Helmet } from 'react-helmet-async';
import style from './NotFoundPage.module.css';
import Container from '../../shared/components/Container/Container';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ErrorPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('page.notFound')}</title>
      </Helmet>
      <div className={style.errorPage404}>
        <Container>
          <div className={style.positionCat}>
            <h2 className={style.titlePage}>404</h2>
            <p className={style.message}>
              {`Don't panic, take a sip of water and go back to main page to try again.`}
            </p>
            <NavLink to="/" className={style.goBack}>
              Return to the main page
            </NavLink>
            <div className={style.cat}>
              <div className={style.ears}>
                <div className={`${style.ear} ${style.rightSide}`}></div>
                <div className={`${style.ear} ${style.leftSide}`}></div>
              </div>
              <div className={style.face}>
                <div className={style.catEyes}>
                  <div className={`${style.eye} ${style.leftSide}`}>
                    <div className={style.eyePupil}></div>
                  </div>
                  <div className={`${style.eye} ${style.rightSide}`}>
                    <div className={style.eyePupil}></div>
                  </div>
                </div>
                <div className={style.nose}></div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default ErrorPage;
