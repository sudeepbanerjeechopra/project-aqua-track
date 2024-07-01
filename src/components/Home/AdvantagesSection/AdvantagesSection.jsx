import css from '../AdvantagesSection/AdvantagesSection.module.css';
import {
  selectUsersAvatars,
  selectUsersCount,
} from '../../../redux/users/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../redux/users/operation.js';
import { icons as sprite } from '../../../shared/icons';

const AdvantagesSection = () => {
  const usersCount = useSelector(selectUsersCount);
  const usersAvatars = useSelector(selectUsersAvatars);
  const dispatch = useDispatch();

  const [currentAvatars, setCurrentAvatars] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  useEffect(() => {
    if (usersAvatars.length > 0) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 3) % usersAvatars.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [usersAvatars]);

  useEffect(() => {
    setCurrentAvatars(usersAvatars.slice(index, index + 3));
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
        {currentAvatars.map((avatar, idx) => (
          <div key={idx} className={css.customer}>
            <img className={css.userAvater} src={avatar} alt="user avatar" />
          </div>
        ))}
        <div className={css.numberCustomers}>+{usersCount}</div>
        <p className={css.text}>
          Our <span className={css.coloredText}>happy</span> customers
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
              Habit drive
            </p>
          </div>
          <p className={css.secBen}>View statistics</p>
        </div>
        <p
          data-aos="zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
          className={css.thirdBen}
        >
          Personal rate setting
        </p>
      </div>
    </div>
  );
};

export default AdvantagesSection;
