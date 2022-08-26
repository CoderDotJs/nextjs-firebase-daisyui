import { useRouter } from 'next/router';
import 'nprogress/nprogress.css'; //styles of nprogress
import { useEffect } from 'react';
import Loading from '../components/Loading/Loading';
import useAuth from './useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, loading, dbUserLoading, dbUser } = useAuth();
  const router = useRouter();
  //no user then login
  useEffect(() => {
    if (!user && !loading) {
      router.push('/login');
    }
  }, [router, user, loading]);
  //if user is loading show bar loading
  // useEffect(() => {
  //   if (loading || dbUserLoading) {
  //     NProgress.start();
  //   }
  //   return () => {
  //     NProgress.done();
  //   };
  // }, [loading, dbUserLoading]);

  //if useris loading show full screen loading

  if (loading || dbUserLoading) {
    return <Loading />;
  }

  return <>{dbUser?.email ? children : null}</>;
};

export default ProtectedRoute;
