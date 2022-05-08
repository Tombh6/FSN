import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  User,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";
import { getAllFavorites } from "../services/favorites.api";

const AuthContext = React.createContext<any>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [favoritesUser, setFavoritesUser] = useState<any>([]);

  useEffect(() => {
    user && getAllFavorites(user.uid).then((res) => setFavoritesUser(res.data));
  }, [user]);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return auth.signOut();
  };

  const resetPassword = (email: string) => {
    return sendPasswordResetEmail(auth, email);
  };

  //   function updateEmail(email: string) {
  //     return currentUser.updateEmail(email);
  //   }

  //   function updatePassword(password: string) {
  //     return currentUser.updatePassword(password);
  //   }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    user,
    login,
    signup,
    logout,
    resetPassword,
    favoritesUser,
    setFavoritesUser,
    // updateEmail,
    // updatePassword,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};
