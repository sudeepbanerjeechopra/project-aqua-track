import { useModalContext } from '../../context/useModalContext';
import LogOutModal from '../Modals/LogOutModal/LogOutModal';
import MonthInfo from './MonthInfo/MonthInfo';
import Userbar from './Userbar/Userbar';
import DailyInfo from './DailyInfo/DailyInfo';

const WaterDetailedInfo = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <button onClick={() => openModal(<LogOutModal />)}>LogOut</button>
      <Userbar />
      <DailyInfo />
      <MonthInfo />
    </>
  );
};

export default WaterDetailedInfo;
