import { Helmet } from 'react-helmet-async';
import UserSettingsModal from '../../components/Modals/UserSettingsModal/UserSettingsModal';
// import Container from '../../shared/components/Container/Container';
// import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';

const SignInPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <UserSettingsModal/>
      {/* <Section>
        <SignInForm />
        <AdvantagesSection />
      </Container> */}
    </>
  );
};

export default SignInPage;
