import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import ForgotPageForm from '../../components/ForgotPageForm/ForgotPageForm';
import style from './ForgotPage.module.css';
import { useMedia } from '../../hooks/useMedia';
import Languages from '../../shared/components/Languages/Languages';

const ForgotPage = () => {
  const { isDesktop } = useMedia();
  return (
    <>
      <Helmet>
        <title>Forgot page</title>
      </Helmet>

      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperHome}>
            <ForgotPageForm />
            {isDesktop && <AdvantagesSection />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ForgotPage;
