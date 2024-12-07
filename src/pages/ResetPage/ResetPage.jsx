import { Helmet } from 'react-helmet-async';
import Container from '../../shared/components/Container/Container';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import ResetPageForm from '../../components/ResetPageForm/ResetPageForm';
import style from './ResetPage.module.css';
import { useMedia } from '../../hooks/useMedia';
import Languages from '../../shared/components/Languages/Languages';
import { useTranslation } from 'react-i18next';

const ResetPage = () => {
  const { t } = useTranslation();
  const { isDesktop } = useMedia();
  return (
    <>
      <Helmet>
        <title>{t('page.reset')}</title>
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
