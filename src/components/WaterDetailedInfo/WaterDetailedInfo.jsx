import { useModalContext } from '../../context/useModalContext';
import LogOutModal from '../Modals/LogOutModal/LogOutModal';
import MonthInfo from './MonthInfo/MonthInfo';
import Userbar from './Userbar/Userbar';
const WaterDetailedInfo = () => {
  const { openModal } = useModalContext();

  return (
    <>
      <button onClick={() => openModal(<LogOutModal />)}>LogOut</button>

      <Userbar />
      <MonthInfo />
    </>
  );
};

export default WaterDetailedInfo;
