import css from '../AdvantagesSection/AdvantagesSection.module.css';
import {
  selectUsersAvatars,
  selectUsersCount,
} from '../../../redux/users/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getUsers } from '../../../redux/users/operation.js';

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
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [usersAvatars]);

  useEffect(() => {
    setCurrentAvatars(usersAvatars.slice(index, index + 3));
  }, [index, usersAvatars]);

  return (
    <div className={css.main}>
      <div className={css.customers}>
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
