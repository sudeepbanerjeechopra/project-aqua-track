import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import ForgotPageForm from '../../components/ForgotPageForm/ForgotPageForm';

const ForgotPage = () => {
  return (
    <>
      <Helmet>
        <title>Forgot page</title>
      </Helmet>

      <Container>
        <ForgotPageForm />
        <AdvantagesSection />
      </Container>
    </>
  );
};

export default ForgotPage;
