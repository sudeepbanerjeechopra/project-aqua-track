import { useEffect, useId } from 'react';
import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import style from '../UserForm.module.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { formValuesForgot } from '../../helpers/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotSchema } from './forgotSchema';
import { forgetPassword } from '../../redux/auth/operation';
import s from './ForgotPageForm.module.css';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ForgotPageForm = () => {
  const { t } = useTranslation();
  const emailId = useId();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: formValuesForgot,
    resolver: yupResolver(forgotSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    try {
      dispatch(forgetPassword(data));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (errors.email) {
      toast.error(t('forgotPage.emailSpanError'));
    }
  });

  return (
    <>
      <WrapperWelcome
        classNameLogo={style.form}
        classNameWelcom={style.welcomPadding}
      >
        <div className={`${style.formBlock} ${s.formPosition}`}>
          <h2 className={style.formTitle}>{t('forgotPage.title')}</h2>
          <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={emailId}>
                {t('forgotPage.email')}
              </label>
              <input
                className={`${style.formInput} ${errors.email && style.errorName}`}
                type="text"
                name="email"
                id={emailId}
                placeholder={t('forgotPage.emailPlaceholder')}
                {...register('email')}
              />

              {errors.email && (
                <span className={style.errorSpan}>
                  {t('forgotPage.emailSpanError')}
                </span>
              )}
            </div>

            <button type="submit" className={style.btnform} disabled={!isValid}>
              {t('forgotPage.button')}
            </button>
          </form>
          <div className={style.haveAccount}>
            <p className={style.haveAccountText}>{t('forgotPage.remember')}</p>{' '}
            <NavLink to="/signin" className={style.haveAccountForm}>
              {t('forgotPage.signIn')}
            </NavLink>
          </div>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default ForgotPageForm;
