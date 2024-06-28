import WaterItem from '../WaterItem/WaterItem';
import css from './WaterList.module.css';

function WaterList() {
  return (
    <div className={css.list}>
      <WaterItem />
      <WaterItem />
      <WaterItem />
      <WaterItem />
    </div>
  );
}

export default WaterList;
