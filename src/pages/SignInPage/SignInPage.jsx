import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import SignInForm from '../../components/SignInForm/SignInForm';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>

      <Container>
        <SignInForm />
        <AdvantagesSection />
      </Container>
    </>
  );
};

export default SignInPage;
