import Logo from '../Logo/Logo';
import style from './WrapperWelcome.module.css';

const WrapperWelcome = ({ children, classNameLogo, classNameWelcom }) => {
  return (
    <>
      <div className={`${style.welcome} ${classNameWelcom}`}>
        <Logo className={`${style.welcomeLogo} ${classNameLogo}`} />
        {children}
      </div>
    </>
  );
};

export default WrapperWelcome;
