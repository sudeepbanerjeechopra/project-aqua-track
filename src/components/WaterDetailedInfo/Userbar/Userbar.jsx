import React, { useState } from 'react';
import css from './Userbar.module.css';
import { icons as sprite } from '../../../shared/icons/index';
import { useAuth } from '../../../hooks/useAut';
import LogOutModal from '../../Modals/LogOutModal/LogOutModal';
import { useModalContext } from '../../../context/useModalContext';

const Userbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useAuth();
  const { openModal } = useModalContext();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={css.userBarWrapper}>
      <h2 className={css.welcome}>
        Hello<span className={css.name}>, {user?.name || 'User'}!</span>
      </h2>
      <div className={css.userBarMenu}>
        <button className={css.userBarBtn} onClick={toggleMenu}>
          {user?.name || 'User'}
          {user?.avatar ? (
            <img src={user.avatar} alt="User Avatar" className={css.avatar} />
          ) : (
            <span className={css.avatarPlaceholder}>.</span>
          )}
          <svg
            className={`${css.chevron} ${menuOpen ? css.open : ''}`}
            width="20"
            height="20"
          >
            <use xlinkHref={`${sprite}#arrow-down`} />
          </svg>
        </button>
        {menuOpen && (
          <div className={css.userBarOpenMenu}>
            <ul>
              <li>
                <a className={css.userBarLink} href="#settings">
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
