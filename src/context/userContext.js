import React, { useContext, useState, useEffect } from "react"
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  createUserWithEmailAndPassword
} from '@firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)
  const [showDrawer, setShowDrawer] = useState(false)

  function signup(email, password) {
    return createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return signOut()
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    showDrawer,
    setShowDrawer
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}