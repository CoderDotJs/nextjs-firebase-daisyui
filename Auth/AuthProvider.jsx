import { createContext } from 'react';
import useFirebase from './useFirebase';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const allcontext = useFirebase();
  return (
    <AuthContext.Provider value={allcontext}>{children}</AuthContext.Provider>
  );
};
