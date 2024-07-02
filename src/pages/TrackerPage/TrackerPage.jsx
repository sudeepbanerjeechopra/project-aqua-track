import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import Modals from '../../components/Modals/Modals';
import Container from '../../shared/components/Container/Container';
import { useTour } from '@reactour/tour';

import style from './TrackerPage.module.css';
import { useEffect } from 'react';

const TrackerPage = () => {
  const { setIsOpen } = useTour();
  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;
    if (isFirstVisit) {
      localStorage.setItem('firstVisit', 'false');
      setIsOpen(true);
    }
  }, []);
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>

      <Container>
        <div className={style.wrapperTracker} data-tour="step-1">
          <WaterMainInfo />
          <WaterDetailedInfo />
        </div>
      </Container>
      <Modals />
    </>
  );
};

export default TrackerPage;
