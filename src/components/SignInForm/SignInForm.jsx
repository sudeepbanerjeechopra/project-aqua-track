import { NavLink } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useTranslation } from 'react-i18next';

import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import GoogleBtn from '../../shared/components/GoogleBtn/GoogleBtn';
import { formValuesSignIn } from '../../helpers/constants';
import { signInSchema } from './signInSchema';

import { icons as sprite } from '../../shared/icons/index';
import style from '../UserForm.module.css';
import s from './SignInForm.module.css';
import { logIn, refreshUser } from '../../redux/auth/operation';
import toast from 'react-hot-toast';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const SignInForm = () => {
  const { t } = useTranslation();
  const [openPassword, setOpenPassword] = useState(false);

  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    defaultValues: formValuesSignIn,
    resolver: yupResolver(signInSchema),
    mode: 'onTouched',
  });

  const handelClickPassword = () => {
    setOpenPassword((prevState) => !prevState);
  };

  const onSubmit = async (data) => {
    try {
      await dispatch(logIn(data)).unwrap();
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (errors.password) {
      toast.error(t('signInPage.passwordSpanError'));
    } else if (errors.email) {
      toast.error(t('signInPage.emailSpanError'));
    }
  });

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(refreshUser());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <>
      <WrapperWelcome
        classNameLogo={style.form}
        classNameWelcom={style.welcomPadding}
      >
        <div className={`${style.formBlock} ${s.formPosition}`}>
          <h2 className={style.formTitle}>{t('signInPage.signIn')}</h2>

          <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={emailId}>
                {t('signInPage.email')}
              </label>
              <input
                className={`${style.formInput} ${errors.email && style.errorName}`}
                type="text"
                name="email"
                id={emailId}
                placeholder={t('signInPage.emailPlaceholder')}
                {...register('email')}
              />
              {errors.email && (
                <span className={style.errorSpan}>
                  {t('signInPage.emailSpanError')}
                </span>
              )}
            </div>

            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={passwordId}>
                {t('signInPage.password')}
              </label>
              <div className={style.passwordWrapper}>
                <input
                  className={`${style.formInput} ${errors.password && style.errorName}`}
                  type={openPassword ? 'text' : 'password'}
                  name="password"
                  id={passwordId}
                  placeholder={t('signInPage.passwordPlaceholder')}
                  {...register('password')}
                />
                {openPassword ? (
                  <button
                    onClick={handelClickPassword}
                    className={style.eyeBtn}
                  >
                    <svg className={`${style.iconeye}`}>
                      <use xlinkHref={`${sprite}#eye`} />
                    </svg>
                  </button>
                ) : (
                  <button
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
                  {t('signInPage.passwordSpanError')}
                </span>
              )}
            </div>

            <button
              type="submit"
              className={style.btnform}
              disabled={!isDirty || !isValid}
            >
              {t('signInPage.signIn')}
            </button>
          </form>

          <GoogleBtn type="In" />

          <div className={s.haveAccountSignIn}>
            <div className={s.question}>
              <p className={style.haveAccountText}>
                {t('signInPage.dontAccount')}
              </p>{' '}
              <NavLink to="/signup" className={style.haveAccountForm}>
                {t('signInPage.signUp')}
              </NavLink>
            </div>
            <div className={s.question}>
              <p className={style.haveAccountText}>
                {t('signInPage.forgotPassword')}
              </p>{' '}
              <NavLink to="/forgot" className={style.haveAccountForm}>
                {t('signInPage.renew')}
              </NavLink>
            </div>
          </div>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default SignInForm;
