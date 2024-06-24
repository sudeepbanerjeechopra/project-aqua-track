import { NavLink } from 'react-router-dom';
import style from './Logo.module.css';

const Logo = () => {
  return (
    <>
      <NavLink to="/" className={style.logo}>
        AquaTrack
      </NavLink>
    </>
  );
};

export default Logo;
