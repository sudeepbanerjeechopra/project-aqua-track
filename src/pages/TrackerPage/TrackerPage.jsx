import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import style from './TrackerPage.module.css';

const TrackerPage = () => {
  return (
    <>
      <h2>TrackerPage</h2>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>
      <div className={style.wrapper}>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </div>
    </>
  );
};

export default TrackerPage;
