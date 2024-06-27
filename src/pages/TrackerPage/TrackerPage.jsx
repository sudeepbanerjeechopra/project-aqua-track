import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import { useModalContext } from "../../context/useModalContext.jsx"
import LogOutModal from '../../components/Modals/LogOutModal/LogOutModal.jsx';
// import style from './TrackerPage.module.css';
import Modals from '../../components/Modals/Modals';
import Container from '../../shared/components/Container/Container';
import UserSettingsModal from '../../components/Modals/UserSettingsModal/UserSettingsModal.jsx';

const TrackerPage = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>

      <Container>
      <button onClick={() => openModal(<UserSettingsModal isOpen={true}/>)}>Open Settings</button>
        <WaterMainInfo />
        <WaterDetailedInfo />

      <button onClick={() => openModal(<LogOutModal />)}>
        Open Log Out Modal
      </button>

      </Container>

      <Modals />
    </>
  );
};

export default TrackerPage;
