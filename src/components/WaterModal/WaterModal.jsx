import WaterForm from '../../components/WaterForm/WaterForm';
import style from './WaterModal.module.css';
import { useTranslation } from 'react-i18next';

const WaterModal = ({ operationType, recordId, initialData }) => {
  const { t } = useTranslation();
  const title =
    operationType === 'add'
      ? t('modals.addEdit.add')
      : t('modals.addEdit.edit');
  const subTitle =
    operationType === 'edit'
      ? t('modals.addEdit.choose')
      : t('modals.addEdit.correct');
  return (
    <div className={style.modalWater}>
      <h2 className={style.titleWaterModal}>{title}</h2>
      <p className={style.subTitleWaterModal}>{subTitle}</p>
      <WaterForm
        operationType={operationType}
        waterId={recordId}
        initialData={initialData}
      />
    </div>
  );
};

export default WaterModal;
