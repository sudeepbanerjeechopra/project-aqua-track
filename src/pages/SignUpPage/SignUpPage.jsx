import { Helmet } from 'react-helmet-async';
import AdvantagesSection from '../../components/Home/AdvantagesSection/AdvantagesSection';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import Container from '../../shared/components/Container/Container';
import style from './SignUpPage.module.css';
import { useMedia } from '../../hooks/useMedia';
import Languages from '../../shared/components/Languages/Languages';
import { useTranslation } from 'react-i18next';

const SignUpPage = () => {
  const { t } = useTranslation();
  const { isDesktop } = useMedia();
  return (
    <>
      <Helmet>
        <title>{t('page.signUp')}</title>
      </Helmet>

      <Container>
        <div className={style.wrapperStyle}>
          <Languages />
          <div className={style.wrapperHome}>
            <SignUpForm />
            {isDesktop && <AdvantagesSection />}
          </div>
        </div>
      </Container>
    </>
  );
};

export default SignUpPage;
