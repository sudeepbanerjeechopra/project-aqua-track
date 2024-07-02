import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import Modals from '../../components/Modals/Modals';
import Container from '../../shared/components/Container/Container';
import { useTour } from '@reactour/tour';
import Languages from '../../shared/components/Languages/Languages';

import style from './TrackerPage.module.css';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const TrackerPage = () => {
  const { t } = useTranslation();
  const { setIsOpen } = useTour();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;
    if (isFirstVisit) {
      localStorage.setItem('firstVisit', 'false');
      setIsOpen(true);
    }
  });

  return (
    <>
      <Helmet>
        <title>{t('page.tracker')}</title>
      </Helmet>

      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperTracker} data-tour="step-1">
            <WaterMainInfo />
            <WaterDetailedInfo />
          </div>
        </div>
      </Container>
      <Modals />
    </>
  );
};

export default TrackerPage;
