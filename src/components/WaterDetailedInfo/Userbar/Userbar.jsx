import { useEffect, useState } from 'react';
import css from './Userbar.module.css';
import { icons as sprite } from '../../../shared/icons/index';
import { useAuth } from '../../../hooks/useAut';
import LogOutModal from '../../Modals/LogOutModal/LogOutModal';
import { useModalContext } from '../../../context/useModalContext';
import UserSettingsModal from '../../Modals/UserSettingsModal/UserSettingsModal';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from '../../../redux/auth/operation';
import { selectUser } from '../../../redux/auth/selectors';

const Userbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const { openModal } = useModalContext();
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUser);
  const [isUserUpdated, setIsUserUpdated] = useState(false);

  useEffect(() => {
    if (!user) {
      dispatch(refreshUser());
    }
  }, [dispatch, user]);

  useEffect(() => {
    if (isUserUpdated) {
      dispatch(refreshUser());
      setIsUserUpdated(false);
    }
  }, [dispatch, isUserUpdated]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const getFirstName = (fullName) => {
    return fullName ? fullName.split(' ')[0] : 'User';
  };

  return (
    <div className={css.userBarWrapper}>
      <h2 className={css.welcome}>
        Hello<span className={css.name}>, {getFirstName(userInfo?.name)}!</span>
      </h2>
      <div className={css.userBarMenu}>
        <button className={css.userBarBtn} onClick={toggleMenu}>
          {getFirstName(userInfo?.name)}
          {userInfo?.avatar ? (
            <img
              src={userInfo.avatar}
              alt="User Avatar"
              className={css.avatar}
            />
          ) : (
            <span className={css.avatarPlaceholder}>.</span>
          )}
          <svg className={`${css.chevron} ${menuOpen ? css.open : ''}`}>
            <use xlinkHref={`${sprite}#arrow-down`} />
          </svg>
        </button>
        {menuOpen && (
          <div className={css.userBarOpenMenu}>
            <ul className={css.wrapperLink}>
              <li>
                <a
                  onClick={() =>
                    openModal(
                      <UserSettingsModal setIsUserUpdated={setIsUserUpdated} />
                    )
                  }
                  className={css.userBarLink}
                  href="#settings"
                >
                  <svg width="16" height="16">
                    <use xlinkHref={`${sprite}#settings`} />
                  </svg>
                  Settings
                </a>
              </li>
              <li>
                <a
                  className={css.userBarLink}
                  onClick={() => openModal(<LogOutModal />)}
                >
                  <svg width="16" height="16">
                    <use xlinkHref={`${sprite}#log-out`} />
                  </svg>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Userbar;
