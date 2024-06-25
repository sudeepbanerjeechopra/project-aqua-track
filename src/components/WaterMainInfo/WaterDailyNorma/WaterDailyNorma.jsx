
import css from './WaterDailyNorma.module.css'

const WaterDailyNorma = () => {
  // замінити частину з desiredVolume яка буде повязана з користувачем

    const desiredVolume = 3000;

    const dailyNorma = desiredVolume / 1000;

  return (
  
    <div className={css.dailyNorma}>
      <a className={css.title}>{dailyNorma} L</a>
      <a className={css.subtitle}>My daily norma</a>
    </div>
  )
}

export default WaterDailyNorma