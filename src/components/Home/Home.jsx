import Container from '../../shared/components/Container/Container';
import AdvantagesSection from './AdvantagesSection/AdvantagesSection';
import WelcomeSection from './WelcomeSection/WelcomeSection';

import style from './Home.module.css';
import Languages from '../../shared/components/Languages/Languages';

const Home = () => {
  return (
    <>
      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperHome}>
            <WelcomeSection />
            <AdvantagesSection />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
