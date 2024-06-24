import { Helmet } from 'react-helmet-async';
import UserSettingsModal from '../../components/Modals/UserSettingsModal/UserSettingsModal';

const SignInPage = () => {
  return (
    <>
      <h2>SignInPage</h2>
      <Helmet>
        <title>Sign In</title>
      </Helmet>
      <UserSettingsModal/>
      {/* <Section>
        <SignInForm />
          <AdvantagesSection />
      </Section> */}
    </>
  );
};

export default SignInPage;
