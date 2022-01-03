import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const allContext = useFirebase();
  return (
    <AuthContext.Provider value={allContext}>
      {/* comment goes here */}
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
