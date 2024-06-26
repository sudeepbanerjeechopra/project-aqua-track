import { useModalContext } from '../../context/useModalContext';
import MonthInfo from './MonthInfo/MonthInfo';
import WaterModal from '../../components/WaterModal/WaterModal';

const WaterDetailedInfo = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <button onClick={() => openModal(<WaterModal/>)}>Open LogOut Modal</button>
      <MonthInfo />
    </>
  );
};

export default WaterDetailedInfo;
