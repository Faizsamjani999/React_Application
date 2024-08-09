// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJk1Dh9_fHSVY3mFVYccg2mRU40dkL3yk",
  authDomain: "auth-with-5eb33.firebaseapp.com",
  projectId: "auth-with-5eb33",
  storageBucket: "auth-with-5eb33.appspot.com",
  messagingSenderId: "422442919045",
  appId: "1:422442919045:web:7606769cf29099a4a1b5ec",
  measurementId: "G-5EG6WQFEJY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)