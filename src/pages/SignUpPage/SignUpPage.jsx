import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Container from '../../shared/components/Container/Container';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <Container>
        <SignUpForm />
        <AdvantagesSection />
      </Container>
    </>
  );
};

export default SignUpPage;
