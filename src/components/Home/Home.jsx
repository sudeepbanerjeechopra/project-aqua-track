import Container from '../../shared/components/Container/Container';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';

import style from './Home.module.css';

const Home = () => {
  return (
    <>
      <Container>
        <div className={style.wrapperHome}>
          <WelcomeSection />
          <AdvantagesSection />
        </div>
      </Container>
    </>
  );
};

export default Home;
