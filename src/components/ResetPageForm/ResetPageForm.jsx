import { useEffect, useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';

import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import { yupResolver } from '@hookform/resolvers/yup';
import { resetPassword } from '../../redux/auth/operation';
import { formValuesRenew } from '../../helpers/constants';
import { resetSchema } from './resetSchema';

import style from '../UserForm.module.css';
import s from './ResetPageForm.module.css';
import { icons as sprite } from '../../shared/icons/index';

const ResetPageForm = () => {
  const [openPasswordEye, setOpenPasswordEye] = useState(false);
  const [openRepeatPasswordEye, setOpenRepeatPasswordEye] = useState(false);

  const passwordId = useId();
  const repeatPasswordId = useId();
  const dispatch = useDispatch();
  const location = useLocation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: formValuesRenew,
    resolver: yupResolver(resetSchema),
    mode: 'onTouched',
  });

  const onSubmit = (data) => {
    try {
      const userData = { ...data };
      delete userData.repeatPassword;

      const queryParams = new URLSearchParams(location.search);
      const resetToken = queryParams.get('resetToken');

      dispatch(resetPassword({ ...userData, resetToken }));
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const handelClickPassword = () => {
    setOpenPasswordEye((prevState) => !prevState);
  };
  const handelClickRepeatPassword = () => {
    setOpenRepeatPasswordEye((prevState) => !prevState);
  };

  useEffect(() => {
    if (errors.password) {
      toast.error(errors.password.message);
    } else if (errors.repeatPassword) {
      toast.error(errors.repeatPassword.message);
    }
  }, [errors.password, errors.repeatPassword]);

  return (
    <>
      <WrapperWelcome
        classNameLogo={style.form}
        classNameWelcom={style.welcomPadding}
      >
        <div className={`${style.formBlock} ${s.formPosition}`}>
          <h2 className={style.formTitle}>Reset your password</h2>

          <form className={style.mainForm} onSubmit={handleSubmit(onSubmit)}>
            <div className={style.fieldThumb}>
              <label className={style.formLabel} htmlFor={passwordId}>
                Password
              </label>
              <div className={style.passwordWrapper}>
                <input
                  className={`${style.formInput} ${errors.password && style.errorName}`}
                  type={openPasswordEye ? 'text' : 'password'}
                  name="password"
                  id={passwordId}
                  placeholder="Enter your password"
                  {...register('password')}
                />
                {openPasswordEye ? (
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
                  type={openRepeatPasswordEye ? 'text' : 'password'}
                  name="repeatPassword"
                  id={repeatPasswordId}
                  placeholder="Repeat password"
                  {...register('repeatPassword')}
                />
                {openRepeatPasswordEye ? (
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

            <button type="submit" className={style.btnform} disabled={!isValid}>
              Send
            </button>
          </form>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default ResetPageForm;
