import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAut';
import { setToken } from '../../redux/auth/slice';
import { setAuthHeader } from '../../redux/auth/operation';

const VerifyEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      dispatch(setToken(token));
      setAuthHeader(token);
    }
  }, [dispatch, location.search]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/tracker');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h1>Verifying your email...</h1>
    </div>
  );
};

export default VerifyEmailPage;
