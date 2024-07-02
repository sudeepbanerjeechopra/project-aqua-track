import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectWaterDay, selectDate } from '../../../redux/water/selectors';
import { apiGetWaterDay } from '../../../redux/water/operation';
import WaterList from './WaterList/WaterList';
import ChooseData from './ChooseDate/ChooseDate';
import AddWaterBtn from './AddWaterBtn/AddWaterBtn';
import CustomScrollBar from '../../../shared/components/CustomScrollWrapper/CustomScrollWrapper';
import css from './DailyInfo.module.css';
import { useTranslation } from 'react-i18next';

function DailyInfo() {
  const { t } = useTranslation();
  const waterDay = useSelector(selectWaterDay);
  const currentDate = useSelector(selectDate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(apiGetWaterDay(currentDate));
  }, [currentDate, dispatch]);

  return (
    <div className={css.wrapper} data-tour="step-4">
      <div className={css.dataEntryContainer}>
        <ChooseData />
        <AddWaterBtn />
      </div>
      {waterDay.length > 0 ? (
        <CustomScrollBar>
          <WaterList />
        </CustomScrollBar>
      ) : (
        <div className={css.text} data-tour="step-6">
          <p>{t('dailyInfo.text')}</p>
        </div>
      )}
    </div>
  );
}

export default DailyInfo;
