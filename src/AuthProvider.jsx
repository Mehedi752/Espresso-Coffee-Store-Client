import { createContext, useEffect, useState } from 'react'
import auth from '../public/firebase.config.js'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from 'firebase/auth'
import { GoogleAuthProvider } from 'firebase/auth'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signOutUser = () => {
    return signOut(auth)
  }

  const updateProfileUser = (updateInfo) => {
    return updateProfile(auth.currentUser, updateInfo);
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      if (currentUser) {
        setUser(currentUser)
        ////console.log(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    })

    return () => {
      unsubcribe()
    }
  }, [])

  const authInfo = {
    createNewUser,
    user,
    setUser,
    signInUser,
    signOutUser,
    loading,
    updateProfileUser,
    signInWithGoogle
  }

  return (
    <div className=''>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  )
}

export default AuthProvider;