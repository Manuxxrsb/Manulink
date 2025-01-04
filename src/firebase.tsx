// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeGQQ7D6I3W3eRxiCGDQPZtRILcNEWBCQ",
  authDomain: "manulink-60fa1.firebaseapp.com",
  projectId: "manulink-60fa1",
  storageBucket: "manulink-60fa1.firebasestorage.app",
  messagingSenderId: "688464881408",
  appId: "1:688464881408:web:2c1d59aa4b6d22d15b35e5",
  measurementId: "G-D756S37GF9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
