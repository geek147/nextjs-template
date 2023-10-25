// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyDj1zvgM7aGlSDSrU69RElrvLE3FNnpvKQ",
  authDomain: "nextjs-betr.firebaseapp.com",
  projectId: "nextjs-betr",
  storageBucket: "nextjs-betr.appspot.com",
  messagingSenderId: "689536832006",
  appId: "1:689536832006:web:2a5f3b5a62564cc5322987"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig)
 console.log("Firebase was initilaized");

// const analytics = getAnalytics(app);
export default app;
