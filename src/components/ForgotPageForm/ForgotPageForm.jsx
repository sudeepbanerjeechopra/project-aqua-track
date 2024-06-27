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

const ForgotPageForm = () => {
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
      toast.error(errors.email.message);
    }
  }, [errors.email]);

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

            <button type="submit" className={style.btnform} disabled={!isValid}>
              Send
            </button>
          </form>
        </div>
      </WrapperWelcome>
    </>
  );
};

export default ForgotPageForm;
