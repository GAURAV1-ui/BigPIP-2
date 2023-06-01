import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { app } from "./config";

const formatAuthUser = (user) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
});

const useFirebaseAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState) => {
    if (!authState) {
      setCurrentUser(null);
      setLoading(false);
      return;
    }

    setLoading(true);
    const formattedUser = formatAuthUser(authState);
    setCurrentUser(formattedUser);
    setLoading(false);
  };

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = auth.onAuthStateChanged(authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    currentUser,
    loading,
    signOut: () => {
      const auth = getAuth(app);
      signOut(auth);
    },
  };
};

export default useFirebaseAuth;
