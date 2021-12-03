import { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const createUserWithEmailPassword = async (payload) => {};
  const signinWithEmailPassword = async (payload) => {};

  return (
    <AuthContext.Provider
      value={{
        createUserWithEmailPassword,
        signinWithEmailPassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
