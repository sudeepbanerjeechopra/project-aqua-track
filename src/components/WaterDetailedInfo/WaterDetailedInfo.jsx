import { useModalContext } from '../../context/useModalContext';
import LogOutModal from '../Modals/LogOutModal/LogOutModal';
import MonthInfo from './MonthInfo/MonthInfo';
const WaterDetailedInfo = () => {
  const { openModal } = useModalContext();

  return (
    <>
      <button onClick={() => openModal(<LogOutModal />)}>LogOut</button>

      <MonthInfo />
    </>
  );
};

export default WaterDetailedInfo;
