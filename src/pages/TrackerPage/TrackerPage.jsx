import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import style from './TrackerPage.module.css';
import Modals from '../../components/Modals/Modals.jsx';
import { useModalContext } from "../../context/useModalContext.jsx"
import LogOutModal from '../../components/Modals/LogOutModal/LogOutModal.jsx';
const TrackerPage = () => {
    const { openModal } = useModalContext();

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
      <button onClick={() => openModal(<LogOutModal />)}>
        Open Log Out Modal
      </button>

      <Modals />
    </>
  );
};

export default TrackerPage;
