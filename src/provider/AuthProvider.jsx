import AuthContext from "../context/AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  // new user create
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //   log in User
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
//   log in with google
const loginWithGoogle = () => {
    return signInWithPopup(auth,googleProvider)
}

  //   update User Profile
  const updateUserProfile = (update) => {
    return updateProfile(auth.currentUser, update);
  };
  // log out user
  const logOut = () => {
    return signOut(auth);
  };

  //   current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    loginWithGoogle,
    updateUserProfile,
    logOut,
    loading
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
