
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxkCiok-3bAaGa7fWoO31LVaSkNiO-R9E",
  authDomain: "react-auth-e9016.firebaseapp.com",
  projectId: "react-auth-e9016",
  storageBucket: "react-auth-e9016.appspot.com",
  messagingSenderId: "1051505222099",
  appId: "1:1051505222099:web:5d2389d7ff41e713da4f26",
  measurementId: "G-L55BMCJF5N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth}