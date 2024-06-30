import css from '../AdvantagesSection/AdvantagesSection.module.css';
import { selectUsersCount } from '../../../redux/users/selectors.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from '../../../redux/users/operation.js';

const AdvantagesSection = () => {
  const usersCount = useSelector(selectUsersCount);
  //const usersAvatars = useSelector(selectUsersAvatars);
  // {usersAvatars.map((avatar) => {
  //   return <div className={css.customer}><img src={avatar} alt="user avatar" /></div>
  // })}

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <div className={css.main}>
      <div className={css.customers}>
        <div className={css.customer}></div>
        <div className={css.customer}></div>
        <div className={css.customer}></div>
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
