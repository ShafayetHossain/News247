import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const ContextProvider = createContext();

const Provider = ({ children }) => {
  const [userAcount, setUserAcount] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

  const provider = new GoogleAuthProvider();
  const signWithGoogle = () =>signInWithPopup(auth, provider);

  const signInUser = (email, password)=> signInWithEmailAndPassword(auth, email, password);
  const signOutUser = ()=> {return signOut(auth)};
  
  const updateUser = (name, photo) => updateProfile(auth.currentUser, { displayName: name, photoURL: photo });

  const resetPassword = (email) =>sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserAcount(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = {
    userAcount,
    createUser,
    signInUser,
    signOutUser,
    updateUser,
    signWithGoogle,
    resetPassword,
    loading,
  };

  return (
    <div>
      <ContextProvider.Provider value={authInfo}>
        <>
          {children}
          <ToastContainer />
        </>
      </ContextProvider.Provider>
    </div>
  );
};

export default Provider;
