import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Loading from '../components/Loading/Loading';
import useAuth from './useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  //no user then login
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [router, user, loading]);

  //if useris loading show full screen loading

  if (loading) {
    return <Loading />;
  }

  return <>{user ? children : null}</>;
};

export default ProtectedRoute;
