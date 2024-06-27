import { useModalContext } from '../../context/useModalContext';
import LogOutModal from '../Modals/LogOutModal/LogOutModal';
import MonthInfo from './MonthInfo/MonthInfo';
import DailyInfo from './DailyInfo/DailyInfo';
const WaterDetailedInfo = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <button onClick={() => openModal(<LogOutModal />)}>LogOut</button>

      <DailyInfo />
      <MonthInfo />
    </>
  );
};

export default WaterDetailedInfo;
