// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvq05iRjwkTDp_-T18UzoZlF39m7YeUc4",
  authDomain: "react-practice1-51b9c.firebaseapp.com",
  projectId: "react-practice1-51b9c",
  storageBucket: "react-practice1-51b9c.appspot.com",
  messagingSenderId: "838167698275",
  appId: "1:838167698275:web:35705d07ab31bee027d156",
  measurementId: "G-QE3BV95HKH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app)