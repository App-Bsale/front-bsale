import { createContext } from "react";
import useSessionReducer, {
  SIGN_IN,
  SIGN_OUT,
} from "../hooks/useSessionReducer";

export const SessionContext = createContext({
  session: null,
  signIn: () => {},
  logout: () => {},
});

export const SessionProvider = ({ children }) => {
  const [session, dispatch] = useSessionReducer();

  function signIn(token, userData, userType) {
    dispatch({ type: SIGN_IN, token: token, userData: userData, userType });
  }

  function logout() {
    dispatch({ type: SIGN_OUT });
  }

  const value = {
    session,
    signIn,
    logout,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
