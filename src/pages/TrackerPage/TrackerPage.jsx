import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
// import style from './TrackerPage.module.css';
import Modals from '../../components/Modals/Modals';
import Container from '../../shared/components/Container/Container';

const TrackerPage = () => {
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>

      <Container>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>

      <Modals />
    </>
  );
};

export default TrackerPage;
