AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebaseConfig'; // ✅ CORRECTO


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // opcional para mostrar splash o loader

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe(); // limpiar el listener al desmontar
 }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {!loading && children}
    //</AuthContext.Provider>
  );
};
