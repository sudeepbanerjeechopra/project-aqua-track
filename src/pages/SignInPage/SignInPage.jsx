import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';
import style from './SignInPage.module.css';
import { useMedia } from '../../hooks/useMedia';
import Languages from '../../shared/components/Languages/Languages';

const SignInPage = () => {
  const { isDesktop } = useMedia();
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperHome}>
            <SignInForm />
            {isDesktop && <AdvantagesSection />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignInPage;
