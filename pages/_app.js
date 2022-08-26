import { useRouter } from 'next/router';
import { AuthContextProvider } from '../Auth/AuthProvider';
import PrivateRoute from '../Auth/PrivateRoute';
import '../styles/globals.css';

const noAuthRequired = [
  '/login',
  '/signup',
  '/forgot-password',
  '/forgot-password/[token]',
];

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
