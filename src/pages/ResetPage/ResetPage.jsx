import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import ResetPageForm from '../../components/ResetPageForm/ResetPageForm';

const ResetPage = () => {
  return (
    <>
      <Helmet>
        <title>Reset page</title>
      </Helmet>
      <Container>
        <ResetPageForm />
        <AdvantagesSection />
      </Container>
    </>
  );
};

export default ResetPage;
