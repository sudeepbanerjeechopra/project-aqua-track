import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Container from '../../shared/components/Container/Container';
import style from './SignUpPage.module.css';
import { useMedia } from '../../hooks/useMedia';

const SignUpPage = () => {
  const { isDesktop } = useMedia();
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <Container>
        <div className={style.wrapperHome}>
          <SignUpForm />
          {isDesktop && <AdvantagesSection />}
        </div>
      </Container>
    </>
  );
};

export default SignUpPage;
