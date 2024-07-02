import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import Modals from '../../components/Modals/Modals';
import Container from '../../shared/components/Container/Container';

import style from './TrackerPage.module.css';
import Languages from '../../shared/components/Languages/Languages';

const TrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>

      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperTracker}>
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
