import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAut';

const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  //turned off for testing
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

export default PrivateRoute;
