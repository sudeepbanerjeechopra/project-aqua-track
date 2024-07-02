import css from '../AdvantagesSection/AdvantagesSection.module.css';
import {
  selectLoading,
  selectUsersAvatars,
  selectUsersCount,
} from '../../../redux/users/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../redux/users/operation.js';
import { icons as sprite } from '../../../shared/icons';
import { Hearts } from 'react-loader-spinner';
import { useTranslation } from 'react-i18next';

const AdvantagesSection = () => {
  const { t } = useTranslation();
  const usersCount = useSelector(selectUsersCount);
  const usersAvatars = useSelector(selectUsersAvatars);
  const usersLoading = useSelector(selectLoading);
  const dispatch = useDispatch();

  const [currentAvatars, setCurrentAvatars] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (usersAvatars.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % usersAvatars.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [usersAvatars]);

  useEffect(() => {
    if (usersAvatars.length > 0) {
      setCurrentAvatars([
        usersAvatars[index % usersAvatars.length],
        usersAvatars[(index + 1) % usersAvatars.length],
        usersAvatars[(index + 2) % usersAvatars.length],
      ]);
    }
  }, [index, usersAvatars]);

  return (
    <div
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
      className={css.main}
    >
      <div
        data-aos="zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        className={css.customers}
      >
        {usersLoading ? (
          <div className={css.wrapperHappy}>
            {currentAvatars.map((avatar, idx) => (
              <div key={idx} className={css.customer}>
                <img
                  className={css.userAvater}
                  src={avatar}
                  alt="user avatar"
                />
              </div>
            ))}
            <div className={css.numberCustomers}>+{usersCount}</div>
          </div>
        ) : (
          <div className={css.widthLoader}>
            <Hearts
              height="35"
              width="35"
              color="#87d28d"
              ariaLabel="hearts-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}

        <p className={css.text}>
          {t('advantagesSection.our')}{' '}
          <span className={css.coloredText}>
            {t('advantagesSection.happy')}
          </span>{' '}
          {t('advantagesSection.customers')}
        </p>
      </div>
      <div className={css.benefits}>
        <div
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className={css.commonCont}
        >
          <div className={css.firstBen}>
            <svg className={css.iconOEllips}>
              <use xlinkHref={`${sprite}#ellips`} />
            </svg>
            <p
              data-aos="zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0"
              className={css.benText}
            >
              {t('advantagesSection.habit')}
            </p>
          </div>
          <p className={css.secBen}>{t('advantagesSection.statistics')}</p>
        </div>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className={css.thirdBen}
        >
          {t('advantagesSection.setting')}
        </p>
      </div>
    </div>
  );
};

export default AdvantagesSection;
