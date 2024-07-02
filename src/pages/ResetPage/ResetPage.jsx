import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import ResetPageForm from '../../components/ResetPageForm/ResetPageForm';
import style from './ResetPage.module.css';
import { useMedia } from '../../hooks/useMedia';
import Languages from '../../shared/components/Languages/Languages';
const ResetPage = () => {
  const { isDesktop } = useMedia();
  return (
    <>
      <Helmet>
        <title>Reset page</title>
      </Helmet>

      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperHome}>
            <ResetPageForm />
            {isDesktop && <AdvantagesSection />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResetPage;
