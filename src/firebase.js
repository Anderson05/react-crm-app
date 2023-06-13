// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7Fxls7x7pMz55q5aM1Ssb9qDZlAxF48",
  authDomain: "crm-react-linkedin-95971.firebaseapp.com",
  projectId: "crm-react-linkedin-95971",
  storageBucket: "crm-react-linkedin-95971.appspot.com",
  messagingSenderId: "130283615999",
  appId: "1:130283615999:web:2bb4c7765acf2aa9637eca",
  measurementId: "G-SFTGX4M77R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);