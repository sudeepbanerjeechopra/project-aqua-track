import { useEffect, useId, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';
// import toast from 'react-hot-toast';

import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import { signUpSchema } from './signUpSchema';
import GoogleBtn from '../../shared/components/GoogleBtn/GoogleBtn';
import { formValuesSignUp } from '../../helpers/constants';
import { registerUser } from '../../redux/auth/operation';

import { icons as sprite } from '../../shared/icons/index';
import style from '../UserForm.module.css';
import toast from 'react-hot-toast';

const SignUpForm = () => {
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
      toast.error(errors.password.message);
    } else if (errors.email) {
      toast.error(errors.email.message);
    } else if (errors.name) {
      toast.error(errors.name.message);
    } else if (errors.repeatPassword) {
      toast.error(errors.repeatPassword.message);
    }
  }, [errors.password, errors.email, errors.name, errors.repeatPassword]);

  return (
    <>
      <WrapperWelcome
        classNameLogo={style.form}
        classNameWelcom={style.welcomPadding}
      >
        <div className={style.formBlock}>
          <h2 className={style.formTitle}>Sign Up</h2>

          <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={nameId}>
                Name
              </label>
              <input
                className={`${style.formInput} ${errors.name && style.errorName}`}
                type="text"
                name="name"
                id={nameId}
                placeholder="Enter your name"
                {...register('name')}
              />
            </div>

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
            </div>

            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={repeatPasswordId}>
                Repeat password
              </label>
              <div className={style.passwordWrapper}>
                <input
                  className={`${style.formInput} ${style.formPhone} ${errors.repeatPassword && style.errorName}`}
                  type={openRepeatPassword ? 'text' : 'password'}
                  name="repeatPassword"
                  id={repeatPasswordId}
                  placeholder="Repeat password"
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
            </div>

            <button
              type="submit"
              className={style.btnform}
              disabled={!isDirty || !isValid}
            >
              Sign Up
            </button>
          </form>

          <GoogleBtn type="Up" />

          <div className={style.haveAccount}>
            <p className={style.haveAccountText}>Already have account?</p>{' '}
            <NavLink to="/signin" className={style.haveAccountForm}>
              Sign In
            </NavLink>
          </div>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default SignUpForm;
