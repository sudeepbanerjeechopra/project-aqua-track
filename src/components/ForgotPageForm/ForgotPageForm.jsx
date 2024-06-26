import { useId } from 'react';
import WrapperWelcome from '../../shared/components/WrapperWelcome/WrapperWelcome';
import style from '../UserForm.module.css';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { formValuesForgot } from '../../helpers/constants';
import { yupResolver } from '@hookform/resolvers/yup';
import { forgotSchema } from './forgotSchema';
import { forgetPassword } from '../../redux/auth/operation';

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
  return (
    <>
      <WrapperWelcome
        classNameLogo={style.form}
        classNameWelcom={style.welcomPadding}
      >
        <div className={style.formBlock}>
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
              {errors.email && (
                <span className={style.errorSpan}>{errors.email.message}</span>
              )}
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
