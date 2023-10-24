// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB9S9hVhUmbHzLw4f2V6kOZHOEWwWX1JIE",
  authDomain: "friendlychat-63ceb.firebaseapp.com",
  projectId: "friendlychat-63ceb",
  storageBucket: "friendlychat-63ceb.appspot.com",
  messagingSenderId: "767896634631",
  appId: "1:767896634631:web:583389fdef523e823fb1a2"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
