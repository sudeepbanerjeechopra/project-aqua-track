import { NavLink } from 'react-router-dom';
import { useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import GoogleBtn from '../../shared/components/GoogleBtn/GoogleBtn';
import { formValuesSignIn } from '../../helpers/constants';
import { signInSchema } from './signInSchema';

import { icons as sprite } from '../../shared/icons/index';
import style from '../UserForm.module.css';
import s from './SignInForm.module.css';
import { logIn } from '../../redux/auth/operation';
import toast from 'react-hot-toast';

const SignInForm = () => {
  const [openPassword, setOpenPassword] = useState(false);

  const emailId = useId();
  const passwordId = useId();

  const dispatch = useDispatch();

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

  const onSubmit = (data) => {
    try {
      dispatch(logIn(data));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (errors.password) {
      toast.error(errors.password.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    }
  }, [errors.password, errors.email]);
  return (
    <>
      <WrapperWelcome
        classNameLogo={style.form}
        classNameWelcom={style.welcomPadding}
      >
        <div className={`${style.formBlock} ${s.formPosition}`}>
          <h2 className={style.formTitle}>Sign In</h2>

          <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={emailId}>
                Enter your email
              </label>
              <input
                className={`${style.formInput} ${errors.email && style.errorName}`}
                type="text"
                name="email"
                id={emailId}
                placeholder="Enter your email"
                {...register('email')}
              />
            </div>

            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={passwordId}>
                Password
              </label>
              <div className={style.passwordWrapper}>
                <input
                  className={`${style.formInput} ${errors.password && style.errorName}`}
                  type={openPassword ? 'text' : 'password'}
                  name="password"
                  id={passwordId}
                  placeholder="Enter your password"
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
            </div>

            <button
              type="submit"
              className={style.btnform}
              disabled={!isDirty || !isValid}
            >
              Sign In
            </button>
          </form>

          <GoogleBtn type="In" />

          <div className={s.haveAccountSignIn}>
            <div className={s.question}>
              <p className={style.haveAccountText}>Don’t have an account?</p>{' '}
              <NavLink to="/signup" className={style.haveAccountForm}>
                Sign Up
              </NavLink>
            </div>
            <div className={s.question}>
              <p className={style.haveAccountText}>Forgot your password?</p>{' '}
              <NavLink to="/forgot" className={style.haveAccountForm}>
                Renew
              </NavLink>
            </div>
          </div>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default SignInForm;
