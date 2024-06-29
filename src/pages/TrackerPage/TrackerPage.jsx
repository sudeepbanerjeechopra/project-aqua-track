import { Helmet } from 'react-helmet-async';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';
import Modals from '../../components/Modals/Modals';
import Container from '../../shared/components/Container/Container';
import { useModalContext } from "../../context/useModalContext.jsx"
import DeleteWaterModal from '../../components/Modals/DeleteWaterModal/DeleteWaterModal.jsx';

const TrackerPage = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <Helmet>
        <title>Tracker Page</title>
      </Helmet>

      <Container>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Container>
      <button onClick={() => openModal(<DeleteWaterModal />)}>
        Open DeleteWater Modal
      </button>
      <Modals />
    </>
  );
};

export default TrackerPage;
