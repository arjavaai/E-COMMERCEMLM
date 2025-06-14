import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (email, password, firstName, lastName) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Update display name
    await updateProfile(user, {
      displayName: `${firstName} ${lastName}`
    });

    // Create user profile in Firestore
    const userProfile = {
      uid: user.uid,
      email: user.email,
      firstName,
      lastName,
      displayName: `${firstName} ${lastName}`,
      role: 'customer',
      createdAt: new Date().toISOString(),
      orders: [],
      addresses: []
    };

    await setDoc(doc(db, 'users', user.uid), userProfile);
    setUserProfile(userProfile);
    
    return userCredential;
  };

  const login = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    setUserProfile(null);
    return signOut(auth);
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = async (updates) => {
    if (currentUser) {
      await setDoc(doc(db, 'users', currentUser.uid), updates, { merge: true });
      setUserProfile(prev => ({ ...prev, ...updates }));
    }
  };

  const fetchUserProfile = async (uid) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', uid));
      if (userDoc.exists()) {
        const profile = userDoc.data();
        setUserProfile(profile);
        return profile;
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
    return null;
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        await fetchUserProfile(user.uid);
      } else {
        setCurrentUser(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userProfile,
    signup,
    login,
    logout,
    resetPassword,
    updateUserProfile,
    fetchUserProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};