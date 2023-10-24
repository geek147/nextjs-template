// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC8IojtzRWz_Ttzrg_kFBPRQNk7aUGFHvo",
  authDomain: "betrbeta-7f64c.firebaseapp.com",
  projectId: "betrbeta-7f64c",
  storageBucket: "betrbeta-7f64c.appspot.com",
  messagingSenderId: "882496064321",
  appId: "1:882496064321:web:3cb2c010d29aded9edafc0",
  measurementId: "G-E1Q35KP9PV"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
