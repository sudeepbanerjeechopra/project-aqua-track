import { BASE_URL } from '../../../helpers/constants';
import { FcGoogle } from 'react-icons/fc';

import style from './GoogleBtn.module.css';

const GoogleBtn = ({ type, className }) => {
  return (
    <>
      <a
        className={`${style.googleBtn} ${className}`}
        href={`${BASE_URL}/users/google`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FcGoogle className={style.googleIcon} /> Sign {type} with Google
      </a>
    </>
  );
};

export default GoogleBtn;
