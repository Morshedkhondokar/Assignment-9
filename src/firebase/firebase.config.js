// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA32OZnldPY2wZ1s4iqPDem3G-R13y5Uwc",
  authDomain: "donate-wear.firebaseapp.com",
  projectId: "donate-wear",
  storageBucket: "donate-wear.firebasestorage.app",
  messagingSenderId: "466825864849",
  appId: "1:466825864849:web:429c8aaddece11bfe1c130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;