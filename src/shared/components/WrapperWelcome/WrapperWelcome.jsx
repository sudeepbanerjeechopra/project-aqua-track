import Logo from '../Logo/Logo';
import style from './WrapperWelcome.module.css';

const WrapperWelcome = ({ children }) => {
  return (
    <>
      <div className={style.welcome}>
        <Logo className={style.welcomeLogo} />
        {children}
      </div>
    </>
  );
};

export default WrapperWelcome;
