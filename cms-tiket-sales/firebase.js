// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "cms-ticket-sale-52be9.firebaseapp.com",
  databaseURL: "https://cms-ticket-sale-52be9-default-rtdb.firebaseio.com",
  projectId: "cms-ticket-sale-52be9",
  storageBucket: "cms-ticket-sale-52be9.appspot.com",
  messagingSenderId: "27779294723",
  appId: "1:27779294723:web:d9d96d725bd7ac26b01036",
  measurementId: "G-97KC0ZCSZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);