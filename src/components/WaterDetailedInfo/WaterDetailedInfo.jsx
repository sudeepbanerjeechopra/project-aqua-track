import { useModalContext } from '../../context/useModalContext';
import LogOutModal from '../Modals/LogOutModal/LogOutModal';
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
