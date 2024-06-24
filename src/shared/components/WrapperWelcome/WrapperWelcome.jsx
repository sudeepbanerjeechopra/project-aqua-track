import Logo from '../Logo/Logo';
import style from './WrapperWelcome.module.css';

const WrapperWelcome = ({ children, className }) => {
  return (
    <>
      <div className={style.welcome}>
        <Logo className={`${style.welcomeLogo} ${className}`} />
        {children}
      </div>
    </>
  );
};

export default WrapperWelcome;
