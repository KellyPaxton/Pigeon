import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCCuAiD5UlqnULHWJWzkgRx9YEsX94oYFU",
  authDomain: "pigeon-0.firebaseapp.com",
  projectId: "pigeon-0",
  storageBucket: "pigeon-0.appspot.com",
  messagingSenderId: "697094438470",
  appId: "1:697094438470:web:70bccfee50fc81b475d447",
  measurementId: "G-HES1SMFEPE"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
