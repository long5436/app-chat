// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  browserSessionPersistence,
  setPersistence,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDC806RagzFoYGl8-jDT1k83XWGyof3pNE",
  authDomain: "chat-app-demo-ace5d.firebaseapp.com",
  projectId: "chat-app-demo-ace5d",
  storageBucket: "chat-app-demo-ace5d.appspot.com",
  messagingSenderId: "11486599596",
  appId: "1:11486599596:web:f0cdf74d4c2afc05dfc209",
  measurementId: "G-9MLL0P04HF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

const facebookProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();

export {
  db,
  doc,
  addDoc,
  collection,
  serverTimestamp,
  auth,
  browserSessionPersistence,
  facebookProvider,
  signInWithPopup,
  FacebookAuthProvider,
  setPersistence,
  onAuthStateChanged,
  GoogleAuthProvider,
  googleProvider,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
