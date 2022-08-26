import axios from 'axios';
import { getIdToken, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from './firebase/firebase.config';

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState(null);

  //axios fetch
  const axiosFetch = axios.create({
    baseURL:
      process.env.nodeEnv === 'development'
        ? process.env.devApi
        : process.env.prodApi,
    headers: {
      authorization: `Bearer ${typeof window !== 'undefined' && token}`,
    },
  });

  axiosFetch.interceptors.response.use(
    async function (config) {
      return config;
    },
    async function (error) {
      if (error.response?.status === 403) {
        logout();
      }
      // eslint-disable-next-line no-undef
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const token = await getIdToken(user).then((token) => token);
        setToken(token);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signup = async (data) => {
    return 'your signup logic';
  };

  const login = async (data) => {
    return 'your login logic';
  };

  const logout = async () => {
    return 'your logout logic';
  };

  return {
    axiosFetch,
    token,
    user,
    loading,
    login,
    signup,
    logout,
  };
};

export default useFirebase;
