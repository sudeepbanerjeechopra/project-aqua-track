import { useEffect, useId, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';

import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import { signUpSchema } from './signUpSchema';
import GoogleBtn from '../../shared/components/GoogleBtn/GoogleBtn';
import { formValuesSignUp } from '../../helpers/constants';
import { registerUser } from '../../redux/auth/operation';

import { icons as sprite } from '../../shared/icons/index';
import style from '../UserForm.module.css';
import s from './SignUpPage.module.css';

const SignUpForm = () => {
  const { t } = useTranslation();
  const [openPassword, setOpenPassword] = useState(false);
  const [openRepeatPassword, setOpenRepeatPassword] = useState(false);

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const repeatPasswordId = useId();

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: formValuesSignUp,
    resolver: yupResolver(signUpSchema),
    mode: 'onTouched',
  });

  const handelClickPassword = () => {
    setOpenPassword((prevState) => !prevState);
  };
  const handelClickRepeatPassword = () => {
    setOpenRepeatPassword((prevState) => !prevState);
  };

  const onSubmit = (data) => {
    const userData = { ...data };
    delete userData.repeatPassword;

    try {
      dispatch(registerUser(userData));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (errors.password) {
      toast.error(t('signUpPage.passwordSpanError'));
    } else if (errors.email) {
      toast.error(t('signUpPage.emailSpanError'));
    } else if (errors.name) {
      toast.error(t('signUpPage.nameSpanError'));
    } else if (errors.repeatPassword) {
      toast.error(t('signUpPage.repeatPasswordpanErrorTwo'));
    }
  });

  return (
    <>
      <WrapperWelcome
        classNameLogo={`${style.form} ${s.form}`}
        classNameWelcom={`${style.welcomPadding} ${s.welcomPadding}`}
      >
        <div className={style.formBlock}>
          <h2 className={style.formTitle}>{t('signUpPage.signUp')}</h2>

          <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={nameId}>
                {t('signUpPage.name')}
              </label>
              <input
                className={`${style.formInput} ${errors.name && style.errorName}`}
                type="text"
                name="name"
                id={nameId}
                placeholder={t('signUpPage.namePlaceholder')}
                {...register('name')}
              />
              {errors.name && (
                <span className={style.errorSpan}>
                  {t('signUpPage.nameSpanError')}
                </span>
              )}
            </div>

            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={emailId}>
                {t('signUpPage.email')}
              </label>
              <input
                className={`${style.formInput} ${errors.email && style.errorName}`}
                type="text"
                name="email"
                id={emailId}
                placeholder={t('signUpPage.emailPlaceholder')}
                {...register('email')}
              />
              {errors.email && (
                <span className={style.errorSpan}>
                  {t('signUpPage.emailSpanError')}
                </span>
              )}
            </div>

            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={passwordId}>
                {t('signUpPage.password')}
              </label>
              <div className={style.passwordWrapper}>
                <input
                  className={`${style.formInput} ${errors.password && style.errorName}`}
                  type={openPassword ? 'text' : 'password'}
                  name="password"
                  id={passwordId}
                  placeholder={t('signUpPage.passwordPlaceholder')}
                  {...register('password')}
                />
                {openPassword ? (
                  <button
                    type="button"
                    onClick={handelClickPassword}
                    className={style.eyeBtn}
                  >
                    <svg className={`${style.iconeye}`}>
                      <use xlinkHref={`${sprite}#eye`} />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handelClickPassword}
                    className={style.eyeBtn}
                  >
                    <svg className={`${style.iconeye}`}>
                      <use xlinkHref={`${sprite}#eye-off`} />
                    </svg>
                  </button>
                )}
              </div>

              {errors.password && (
                <span className={style.errorSpan}>
                  {t('signUpPage.passwordSpanError')}
                </span>
              )}
            </div>

            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={repeatPasswordId}>
                {t('signUpPage.repeatPassword')}
              </label>
              <div className={style.passwordWrapper}>
                <input
                  className={`${style.formInput} ${style.formPhone} ${errors.repeatPassword && style.errorName}`}
                  type={openRepeatPassword ? 'text' : 'password'}
                  name="repeatPassword"
                  id={repeatPasswordId}
                  placeholder={t('signUpPage.repeatPassword')}
                  {...register('repeatPassword')}
                />
                {openRepeatPassword ? (
                  <button
                    type="button"
                    onClick={handelClickRepeatPassword}
                    className={style.eyeBtn}
                  >
                    <svg className={`${style.iconeye}`}>
                      <use xlinkHref={`${sprite}#eye`} />
                    </svg>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handelClickRepeatPassword}
                    className={style.eyeBtn}
                  >
                    <svg className={`${style.iconeye}`}>
                      <use xlinkHref={`${sprite}#eye-off`} />
                    </svg>
                  </button>
                )}
              </div>

              {errors.repeatPassword && (
                <span className={style.errorSpan}>
                  {t('signUpPage.repeatPasswordpanError')}
                </span>
              )}
            </div>

            <div className={s.btnForm}>
              <button
                type="submit"
                className={style.btnform}
                disabled={!isDirty || !isValid}
              >
                {t('signUpPage.signUp')}
              </button>
              <GoogleBtn type="Up" className={s.glg} />
            </div>
          </form>

          <div className={style.haveAccount}>
            <p className={style.haveAccountText}>
              {t('signUpPage.textAlready')}
            </p>{' '}
            <NavLink to="/signin" className={style.haveAccountForm}>
              {t('signUpPage.signIn')}
            </NavLink>
          </div>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default SignUpForm;
