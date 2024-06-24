import Container from '../../shared/components/Container/Container';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';

const Home = () => {
  return (
    <>
      <Container>
        <WelcomeSection />
        <AdvantagesSection />
      </Container>
    </>
  );
};

export default Home;
