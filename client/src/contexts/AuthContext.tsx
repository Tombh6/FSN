import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  User,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase-config";

// onAuthStateChanged(auth, (currentUser) => {
//   setUser(currentUser);
// });
// const register = async () => {
//   try {
//     const user = await createUserWithEmailAndPassword(
//       auth,
//       registerEmail,
//       registerPassword
//     );
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };
// const login = async () => {
//   try {
//     const user = await signInWithEmailAndPassword(
//       auth,
//       loginEmail,
//       loginPassword
//     );
//   } catch (error: any) {
//     console.log(error.message);
//   }
// };

const AuthContext = React.createContext<any>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<User | null>();
  const [loading, setLoading] = useState(true);
  const [favoritesUser, setFavoritesUser] = useState<any[]>([]);

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
