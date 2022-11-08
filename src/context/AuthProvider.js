import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

// Default context for better auto complition
const defaultContext = {
  user: {},
  createUserHandler: () => {},
  logInHandler: () => {},
  logOutHandler: () => {},
  updateUserProfileHandler: () => {},
};

// Created context
export const AuthContext = createContext(defaultContext);

const auth = getAuth(app);

// ------------------------------------------- //
// Provider Function which returns AuthContext
// ------------------------------------------- //

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoding, setIsLoding] = useState(true);

  // Create user
  const createUserHandler = (email, password) => {
    setIsLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user

  const logInHandler = (email, password) => {
    setIsLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Logout user

  const logOutHandler = () => {
    setIsLoding(true);
    return signOut(auth);
  };

  const updateUserProfileHandler = (displayName, photoURL) => {
    setIsLoding(true);
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  // Track user state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoding(false);
    });

    return () => unSubscribe();
  }, []);

  // Context value
  const userContext = {
    user,
    createUserHandler,
    isLoding,
    logInHandler,
    logOutHandler,
    updateUserProfileHandler,
  };

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
