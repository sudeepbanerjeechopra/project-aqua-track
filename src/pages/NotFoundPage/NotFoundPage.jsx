import { Helmet } from 'react-helmet-async';
import style from './NotFoundPage.module.css';
import Container from '../../shared/components/Container/Container';

const ErrorPage = () => {
  return (
    <>
      <Helmet>
        <title>Wrong place</title>
      </Helmet>
      <div className={style.errorPage404}>
        <Container>
          <div className={style.positionCat}>
            <h2 className={style.titlePage}>404</h2>
            <p className={style.message}>You came to the wrong neighborhood</p>
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
