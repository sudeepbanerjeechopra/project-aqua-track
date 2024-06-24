import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

const SignUpPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>

      <SignUpForm />
      <AdvantagesSection />
    </>
  );
};

export default SignUpPage;
