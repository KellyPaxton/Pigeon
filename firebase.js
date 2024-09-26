// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCuAiD5UlqnULHWJWzkgRx9YEsX94oYFU",
  authDomain: "pigeon-0.firebaseapp.com",
  projectId: "pigeon-0",
  storageBucket: "pigeon-0.appspot.com",
  messagingSenderId: "697094438470",
  appId: "1:697094438470:web:70bccfee50fc81b475d447",
  measurementId: "G-HES1SMFEPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
