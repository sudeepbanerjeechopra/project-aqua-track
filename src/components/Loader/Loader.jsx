import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.spinnerBox}>
        <div className={`${style.blueOrbit} ${style.leo}`}></div>

        <div className={`${style.greenOrbit} ${style.leo}`}></div>

        <div className={`${style.redOrbit} ${style.leo}`}></div>

        <div className={`${style.whiteOrbit} ${style.w1} ${style.leo}`}></div>
        <div className={`${style.whiteOrbit} ${style.w2} ${style.leo}`}></div>
        <div className={`${style.whiteOrbit} ${style.w3} ${style.leo}`}></div>
      </div>
    </div>
  );
};

export default Loader;
