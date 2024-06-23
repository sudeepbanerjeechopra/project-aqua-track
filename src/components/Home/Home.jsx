import UserSettingsModal from '../Modals/UserSettingsModal/UserSettingsModal';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
  return (
    <>
      <AdvantagesSection />
      <WelcomeSection />
      <UserSettingsModal />
    </>
  );
};

export default Home;
