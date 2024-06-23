import { useModalContext } from '../../context/useModalContext';
// import LogOutModal from '../Modals/LogOutModal/LogOutModal';
import MonthInfo from './MonthInfo/MonthInfo';
import WaterModal from '../../components/WaterModal/WaterModal';

import DailyInfo from './DailyInfo/DailyInfo';
const WaterDetailedInfo = () => {
  const { openModal } = useModalContext();
  return (
    <>
      <button
        onClick={() => openModal(<WaterModal operationType={'add'} recordId />)}
      >
        Open LogOut Modal
      </button>
      <DailyInfo />
      <MonthInfo />
    </>
  );
};

export default WaterDetailedInfo;
