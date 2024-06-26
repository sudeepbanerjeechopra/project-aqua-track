import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { setToken } from '../../redux/auth/slice';
import { getRefreshToken, setAuthHeader } from '../../redux/auth/operation';
import { useAuth } from '../../hooks/useAut';
import Loader from '../Loader/Loader';

const VerifyEmailPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    const refreshToken = params.get('refreshToken');
    if (token && refreshToken) {
      dispatch(setToken({ token, refreshToken }));
      setAuthHeader(token);
      getRefreshToken(dispatch, token, refreshToken);
    }
  }, [dispatch, location.search]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/tracker');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <Loader />
    </>
  );
};

export default VerifyEmailPage;
