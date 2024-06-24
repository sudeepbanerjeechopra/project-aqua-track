import css from '../AdvantagesSection/AdvantagesSection.module.css';

const AdvantagesSection = () => {
  return (
    <div className={css.main}>
      <div className={css.customers}>
        <div className={css.customer}></div>
        <div className={css.customer}></div>
        <div className={css.customer}></div>
        <p className={css.text}>Our <span className={css.coloredText}>happy</span> customers</p>
      </div>
      <div className={css.benefits}>
        <div className={css.commonCont}>
        <div className={css.firstBen}>
          <div className={css.point}></div>
          <p className={css.benText}>Habit drive</p>
        </div>
        <p className={css.secBen}>View statistics</p>
        </div>
        <p className={css.thirdBen}>Personal rate setting</p>
      </div>
    </div>
  );
};

export default AdvantagesSection;
