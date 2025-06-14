// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-9aRspMIAYxMU4HfCnQJSwkbPPZjhWZU",
  authDomain: "fir-ecom-41c90.firebaseapp.com",
  projectId: "fir-ecom-41c90",
  storageBucket: "fir-ecom-41c90.firebasestorage.app",
  messagingSenderId: "522782782350",
  appId: "1:522782782350:web:c15ddf7635e45ca2ea6adf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;