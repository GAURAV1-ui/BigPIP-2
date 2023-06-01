import { createContext, useContext } from "react";
import useFirebaseAuth from "../firebase/useFirebaseAuth";

const AuthContext = createContext({
  auth: {
    currentUser: null,
    loading: true,
  },
});

export function AuthUserProvider({ children }) {
  const auth = useFirebaseAuth();
  console.log({ auth });
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
export const useAuth = () => useContext(AuthContext);
