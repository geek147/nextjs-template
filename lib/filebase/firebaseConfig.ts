// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAT6DMfE_pvi1uO0FOtlZ2Y3G1OkvoQHxg",
  authDomain: "subscriptiondb-fb942.firebaseapp.com",
  projectId: "subscriptiondb-fb942",
  storageBucket: "subscriptiondb-fb942.appspot.com",
  messagingSenderId: "744026773582",
  appId: "1:744026773582:web:6d6a71aebf9e3bef374b1f",
  measurementId: "G-C60PHQZ622",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;
